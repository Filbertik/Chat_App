import type { User } from "@/types/chat";

interface ChatHeaderProps {
  user: User;
}

const ChatHeader = ({ user }: ChatHeaderProps) => {
  return (
    <header className="flex h-[76px] shrink-0 items-center border-b border-gray-200 bg-white px-8">
      <div className="relative shrink-0">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-11 w-11 rounded-full object-cover"
        />

        {user.isOnline && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        )}
      </div>

      <div className="ml-3">
        <h2 className="text-sm font-semibold text-gray-900">{user.name}</h2>

        <p
          className={`mt-0.5 text-xs ${
            user.isOnline ? "text-green-500" : "text-gray-400"
          }`}
        >
          {user.isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </header>
  );
};

export default ChatHeader;
