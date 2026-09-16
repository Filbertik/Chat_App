import { create } from "zustand";

import {
  chats as initialChats,
  messages as initialMessages,
} from "@/data/mockChats";

interface ChatStore {
  chats: typeof initialChats;
  messages: typeof initialMessages;
  activeChatId: string | null;
  searchQuery: string;

  setActiveChat: (chatId: string) => void;
  setSearchQuery: (query: string) => void;
  markChatAsRead: (chatId: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: initialChats,
  messages: initialMessages,
  activeChatId: initialChats[0]?.id ?? null,
  searchQuery: "",

  setActiveChat: (chatId) => {
    set({
      activeChatId: chatId,
    });
  },

  setSearchQuery: (query) => {
    set({
      searchQuery: query,
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
