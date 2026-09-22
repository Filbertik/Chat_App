import { useState } from "react";

import { useChatStore } from "@/store/chatStore";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";

interface ChatWindowProps {
  isMobileChatOpen: boolean;
  onBack: () => void;
}

const ChatWindow = ({ isMobileChatOpen, onBack }: ChatWindowProps) => {
  const [messageText, setMessageText] = useState("");

  const activeChatId = useChatStore((state) => state.activeChatId);

  const chats = useChatStore((state) => state.chats);

  const sendMessage = useChatStore((state) => state.sendMessage);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const handleSendMessage = () => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) {
      return;
    }

    sendMessage(trimmedMessage);
    setMessageText("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  if (!activeChat) {
    return (
      <section
        className={`flex h-full flex-1 items-center justify-center bg-[#f5f7fb] ${
          isMobileChatOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <p className="text-sm text-gray-400">
          Select a chat to start messaging
        </p>
      </section>
    );
  }

  return (
    <section
      className={`h-full min-w-0 flex-1 flex-col bg-[#f5f7fb] ${
        isMobileChatOpen ? "flex" : "hidden md:flex"
      }`}
    >
      <ChatHeader user={activeChat.user} onBack={onBack} />

      <MessageList chatId={activeChat.id} />

      <div className="shrink-0 border-t border-gray-200 bg-white px-3 py-3 md:px-8 md:py-5">
        <div className="flex items-end gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 md:gap-3">
          <textarea
            value={messageText}
            onChange={(event) => setMessageText(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a message..."
            rows={1}
            className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />

          <button
            type="button"
            onClick={handleSendMessage}
            disabled={!messageText.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
            aria-label="Send message"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <p className="mt-2 hidden text-xs text-gray-400 md:block">
          Press Enter to send · Shift + Enter for a new line
        </p>
      </div>
    </section>
  );
};

export default ChatWindow;
