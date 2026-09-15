import type { Message as MessageType } from "@/types/chat";

interface MessageProps {
  message: MessageType;
  isOwn: boolean;
}

const Message = ({ message, isOwn }: MessageProps) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[65%]">
        <div
          className={
            isOwn
              ? "rounded-2xl rounded-br-md bg-blue-500 px-4 py-3"
              : "rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm"
          }
        >
          <p
            className={
              isOwn
                ? "text-sm leading-5 text-white"
                : "text-sm leading-5 text-gray-700"
            }
          >
            {message.text}
          </p>
        </div>

        <span
          className={`mt-1 block text-xs text-gray-400 ${
            isOwn ? "text-right" : "text-left"
          }`}
        >
          {message.createdAt}
        </span>
      </div>
    </div>
  );
};

export default Message;
