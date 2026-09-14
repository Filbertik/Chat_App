import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

const ChatLayout = () => {
  return (
    <main className="flex h-screen w-full bg-[#f5f7fb]">
      <ChatList />
      <ChatWindow />
    </main>
  );
};

export default ChatLayout;
