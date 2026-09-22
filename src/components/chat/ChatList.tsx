import { useMemo } from "react";

import { useChatStore } from "@/store/chatStore";

import ChatListItem from "./ChatListItem";

interface ChatListProps {
  isMobileChatOpen: boolean;
  onChatSelect: () => void;
}

const ChatList = ({ isMobileChatOpen, onChatSelect }: ChatListProps) => {
  const chats = useChatStore((state) => state.chats);
  const searchQuery = useChatStore((state) => state.searchQuery);
  const setSearchQuery = useChatStore((state) => state.setSearchQuery);

  const filteredChats = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return [...chats]
      .filter((chat) => {
        if (!query) {
          return true;
        }

        return (
          chat.user.name.toLowerCase().includes(query) ||
          chat.lastMessage.text.toLowerCase().includes(query)
        );
      })
      .sort((firstChat, secondChat) => {
        return (
          new Date(secondChat.lastMessage.createdAt).getTime() -
          new Date(firstChat.lastMessage.createdAt).getTime()
        );
      });
  }, [chats, searchQuery]);

  return (
    <aside
      className={`h-full w-full shrink-0 flex-col border-r border-gray-200 bg-white md:flex md:w-[360px] ${
        isMobileChatOpen ? "hidden" : "flex"
      }`}
    >
      <div className="border-b border-gray-200 px-4 py-4 md:px-6 md:py-5">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>

        <div className="relative mt-4 md:mt-5">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search chats..."
            className="h-11 w-full rounded-xl bg-gray-100 px-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-gray-50 focus:ring-2 focus:ring-gray-200"
          />

          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19 6.58172 19 3 6.58172 3 11 3 15.4183 6.58172 19 11 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatListItem key={chat.id} chat={chat} onSelect={onChatSelect} />
          ))
        ) : (
          <div className="px-6 py-10 text-center">
            <p className="text-sm text-gray-400">No chats found</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ChatList;
