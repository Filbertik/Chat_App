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
      createdAt: new Date().toLocaleTimeString("uk-UA", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isRead: true,
    };

    set((state) => ({
      messages: [...state.messages, newMessage],

      chats: state.chats.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              lastMessage: newMessage,
            }
          : chat,
      ),
    }));
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
