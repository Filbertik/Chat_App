import type { User } from "@/types/chat";

interface ChatHeaderProps {
  user: User;
  onBack?: () => void;
}

const ChatHeader = ({ user, onBack }: ChatHeaderProps) => {
  return (
    <header className="flex h-[68px] shrink-0 items-center border-b border-gray-200 bg-white px-4 md:h-[76px] md:px-8">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 md:hidden"
          aria-label="Back to chats"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <div className="relative shrink-0">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
        />

        {user.isOnline && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        )}
      </div>

      <div className="ml-3 min-w-0">
        <h2 className="truncate text-sm font-semibold text-gray-900">
          {user.name}
        </h2>

        <p
          className={`mt-0.5 text-xs ${
            user.isOnline ? "text-green-500" : "text-gray-400"
          }`}
        >
          {user.isOnline
            ? "Online"
            : user.lastSeen
              ? `Last seen ${user.lastSeen}`
              : "Offline"}
        </p>
      </div>
    </header>
  );
};

export default ChatHeader;
