import { useChatStore } from "@/store/chatStore";

import Message from "./Message";

interface MessageListProps {
  chatId: string;
}

const MessageList = ({ chatId }: MessageListProps) => {
  const messages = useChatStore((state) => state.messages);

  const chatMessages = messages.filter((message) => message.chatId === chatId);

  return (
    <div className="flex flex-1 flex-col overflow-y-auto px-4 py-5 md:px-8 md:py-6">
      <div className="flex flex-col gap-4">
        {chatMessages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwn={message.senderId === "current-user"}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
