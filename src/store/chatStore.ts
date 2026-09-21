import { create } from "zustand";

import {
  chats as initialChats,
  messages as initialMessages,
} from "@/data/mockChats";

import type { Chat, Message } from "@/types/chat";

interface ChatStore {
  chats: Chat[];
  messages: Message[];
  activeChatId: string | null;
  searchQuery: string;

  setActiveChat: (chatId: string) => void;
  setSearchQuery: (query: string) => void;
  sendMessage: (text: string) => void;
  editMessage: (messageId: string, text: string) => void;
  deleteMessage: (messageId: string) => void;
  markChatAsRead: (chatId: string) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: initialChats,
  messages: initialMessages,
  activeChatId: initialChats[0]?.id ?? null,
  searchQuery: "",

  setActiveChat: (chatId) => {
    set({
      activeChatId: chatId,
    });

    get().markChatAsRead(chatId);
  },

  setSearchQuery: (query) => {
    set({
      searchQuery: query,
    });
  },

  sendMessage: (text) => {
    const { activeChatId } = get();

    if (!activeChatId || !text.trim()) {
      return;
    }

    const newMessage: Message = {
      id: crypto.randomUUID(),
      chatId: activeChatId,
      senderId: "current-user",
      text: text.trim(),
      createdAt: new Date().toISOString(),
      isRead: true,
      isEdited: false,
    };

    set((state) => ({
      messages: [...state.messages, newMessage],

      chats: state.chats.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              lastMessage: newMessage,
              unreadCount: 0,
            }
          : chat,
      ),
    }));
  },

  editMessage: (messageId, text) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    set((state) => {
      const message = state.messages.find((item) => item.id === messageId);

      if (!message || message.senderId !== "current-user") {
        return state;
      }

      const updatedMessage: Message = {
        ...message,
        text: trimmedText,
        isEdited: true,
      };

      return {
        messages: state.messages.map((item) =>
          item.id === messageId ? updatedMessage : item,
        ),

        chats: state.chats.map((chat) =>
          chat.lastMessage.id === messageId
            ? {
                ...chat,
                lastMessage: updatedMessage,
              }
            : chat,
        ),
      };
    });
  },

  deleteMessage: (messageId) => {
    set((state) => {
      const message = state.messages.find((item) => item.id === messageId);

      if (!message || message.senderId !== "current-user") {
        return state;
      }

      const updatedMessages = state.messages.filter(
        (item) => item.id !== messageId,
      );

      return {
        messages: updatedMessages,

        chats: state.chats.map((chat) => {
          if (chat.lastMessage.id !== messageId) {
            return chat;
          }

          const chatMessages = updatedMessages
            .filter((item) => item.chatId === chat.id)
            .sort(
              (firstMessage, secondMessage) =>
                new Date(secondMessage.createdAt).getTime() -
                new Date(firstMessage.createdAt).getTime(),
            );

          const newLastMessage = chatMessages[0];

          if (!newLastMessage) {
            return chat;
          }

          return {
            ...chat,
            lastMessage: newLastMessage,
          };
        }),
      };
    });
  },

  markChatAsRead: (chatId) => {
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              unreadCount: 0,
            }
          : chat,
      ),

      messages: state.messages.map((message) =>
        message.chatId === chatId
          ? {
              ...message,
              isRead: true,
            }
          : message,
      ),
    }));
  },
}));

// import { create } from "zustand";

// import {
//   chats as initialChats,
//   messages as initialMessages,
// } from "@/data/mockChats";

// import type { Chat, Message } from "@/types/chat";

// interface ChatStore {
//   chats: Chat[];
//   messages: Message[];
//   activeChatId: string | null;
//   searchQuery: string;

//   setActiveChat: (chatId: string) => void;
//   setSearchQuery: (query: string) => void;
//   sendMessage: (text: string) => void;
//   markChatAsRead: (chatId: string) => void;
// }

// export const useChatStore = create<ChatStore>((set, get) => ({
//   chats: initialChats,
//   messages: initialMessages,
//   activeChatId: initialChats[0]?.id ?? null,
//   searchQuery: "",

//   setActiveChat: (chatId) => {
//     set({
//       activeChatId: chatId,
//     });

//     get().markChatAsRead(chatId);
//   },

//   setSearchQuery: (query) => {
//     set({
//       searchQuery: query,
//     });
//   },

//   sendMessage: (text) => {
//     const { activeChatId } = get();

//     if (!activeChatId || !text.trim()) {
//       return;
//     }

//     const newMessage: Message = {
//       id: crypto.randomUUID(),
//       chatId: activeChatId,
//       senderId: "current-user",
//       text: text.trim(),
//       createdAt: new Date().toLocaleTimeString("uk-UA", {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//       isRead: true,
//     };

//     set((state) => {
//       const updatedChats = state.chats.map((chat) =>
//         chat.id === activeChatId
//           ? {
//               ...chat,
//               lastMessage: newMessage,
//               unreadCount: 0,
//             }
//           : chat,
//       );

//       return {
//         messages: [...state.messages, newMessage],
//         chats: updatedChats,
//       };
//     });
//   },

//   markChatAsRead: (chatId) => {
//     set((state) => ({
//       chats: state.chats.map((chat) =>
//         chat.id === chatId
//           ? {
//               ...chat,
//               unreadCount: 0,
//             }
//           : chat,
//       ),

//       messages: state.messages.map((message) =>
//         message.chatId === chatId
//           ? {
//               ...message,
//               isRead: true,
//             }
//           : message,
//       ),
//     }));
//   },
// }));

// // import { create } from "zustand";

// // import {
// //   chats as initialChats,
// //   messages as initialMessages,
// // } from "@/data/mockChats";

// // import type { Chat, Message } from "@/types/chat";

// // interface ChatStore {
// //   chats: Chat[];
// //   messages: Message[];
// //   activeChatId: string | null;
// //   searchQuery: string;

// //   setActiveChat: (chatId: string) => void;
// //   setSearchQuery: (query: string) => void;
// //   sendMessage: (text: string) => void;
// //   markChatAsRead: (chatId: string) => void;
// // }

// // export const useChatStore = create<ChatStore>((set, get) => ({
// //   chats: initialChats,
// //   messages: initialMessages,
// //   activeChatId: initialChats[0]?.id ?? null,
// //   searchQuery: "",

// //   setActiveChat: (chatId) => {
// //     set({
// //       activeChatId: chatId,
// //     });

// //     get().markChatAsRead(chatId);
// //   },

// //   setSearchQuery: (query) => {
// //     set({
// //       searchQuery: query,
// //     });
// //   },

// //   sendMessage: (text) => {
// //     const { activeChatId } = get();

// //     if (!activeChatId || !text.trim()) {
// //       return;
// //     }

// //     const newMessage: Message = {
// //       id: crypto.randomUUID(),
// //       chatId: activeChatId,
// //       senderId: "current-user",
// //       text: text.trim(),
// //       createdAt: new Date().toLocaleTimeString("uk-UA", {
// //         hour: "2-digit",
// //         minute: "2-digit",
// //       }),
// //       isRead: true,
// //     };

// //     set((state) => ({
// //       messages: [...state.messages, newMessage],

// //       chats: state.chats.map((chat) =>
// //         chat.id === activeChatId
// //           ? {
// //               ...chat,
// //               lastMessage: newMessage,
// //             }
// //           : chat,
// //       ),
// //     }));
// //   },

// //   markChatAsRead: (chatId) => {
// //     set((state) => ({
// //       chats: state.chats.map((chat) =>
// //         chat.id === chatId
// //           ? {
// //               ...chat,
// //               unreadCount: 0,
// //             }
// //           : chat,
// //       ),

// //       messages: state.messages.map((message) =>
// //         message.chatId === chatId
// //           ? {
// //               ...message,
// //               isRead: true,
// //             }
// //           : message,
// //       ),
// //     }));
// //   },
// // }));
