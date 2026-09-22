import { useState } from "react";

import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

const ChatLayout = () => {
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsMobileChatOpen(true);
  };

  const handleBackToChatList = () => {
    setIsMobileChatOpen(false);
  };

  return (
    <main className="flex h-screen w-full overflow-hidden bg-[#f5f7fb]">
      <ChatList
        isMobileChatOpen={isMobileChatOpen}
        onChatSelect={handleOpenChat}
      />

      <ChatWindow
        isMobileChatOpen={isMobileChatOpen}
        onBack={handleBackToChatList}
      />
    </main>
  );
};

export default ChatLayout;

// import ChatList from "./ChatList";
// import ChatWindow from "./ChatWindow";

// const ChatLayout = () => {
//   return (
//     <main className="flex h-screen w-full bg-[#f5f7fb]">
//       <ChatList />
//       <ChatWindow />
//     </main>
//   );
// };

// export default ChatLayout;
