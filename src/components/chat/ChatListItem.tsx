import type { Chat } from "@/types/chat";
import { useChatStore } from "@/store/chatStore";

interface ChatListItemProps {
  chat: Chat;
  onSelect: () => void;
}

const ChatListItem = ({ chat, onSelect }: ChatListItemProps) => {
  const activeChatId = useChatStore((state) => state.activeChatId);

  const setActiveChat = useChatStore((state) => state.setActiveChat);

  const isActive = activeChatId === chat.id;

  const messageDate = new Date(chat.lastMessage.createdAt);

  const formattedTime = messageDate.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleChatClick = () => {
    setActiveChat(chat.id);
    onSelect();
  };

  return (
    <button
      type="button"
      onClick={handleChatClick}
      className={`flex w-full items-center gap-3 border-b border-gray-100 px-4 py-4 text-left transition md:px-6 ${
        isActive ? "bg-blue-50" : "hover:bg-gray-50 active:bg-gray-100"
      }`}
    >
      <div className="relative shrink-0">
        <img
          src={chat.user.avatar}
          alt={chat.user.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        {chat.user.isOnline && (
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h2
            className={`truncate text-sm ${
              chat.unreadCount > 0
                ? "font-bold text-gray-900"
                : "font-semibold text-gray-900"
            }`}
          >
            {chat.user.name}
          </h2>

          <span
            className={`shrink-0 text-xs ${
              chat.unreadCount > 0
                ? "font-medium text-blue-500"
                : "text-gray-400"
            }`}
          >
            {formattedTime}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p
            className={`truncate text-sm ${
              chat.unreadCount > 0
                ? "font-medium text-gray-700"
                : "text-gray-500"
            }`}
          >
            {chat.lastMessage.text}
          </p>

          {chat.unreadCount > 0 && (
            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 px-1.5 text-xs font-medium text-white">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ChatListItem;
