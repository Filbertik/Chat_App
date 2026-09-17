import { useEffect, useRef } from "react";

import { useChatStore } from "@/store/chatStore";

import Message from "./Message";

interface MessageListProps {
  chatId: string;
}

const MessageList = ({ chatId }: MessageListProps) => {
  const messages = useChatStore((state) => state.messages);

  const bottomRef = useRef<HTMLDivElement>(null);

  const chatMessages = messages.filter((message) => message.chatId === chatId);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chatMessages.length, chatId]);

  return (
    <div className="flex flex-1 flex-col overflow-y-auto px-8 py-6">
      <div className="flex flex-col gap-4">
        {chatMessages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwn={message.senderId === "current-user"}
          />
        ))}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;
