import { chats } from "@/data/mockChats";
import { useChatStore } from "@/store/chatStore";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const ChatWindow = () => {
  const activeChatId = useChatStore((state) => state.activeChatId);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  if (!activeChat) {
    return (
      <section className="flex min-w-0 flex-1 items-center justify-center bg-[#f8f9fc]">
        <p className="text-sm text-gray-400">
          Select a chat to start messaging
        </p>
      </section>
    );
  }

  return (
    <section className="flex min-w-0 flex-1 flex-col bg-[#f8f9fc]">
      <ChatHeader user={activeChat.user} />

      <MessageList chatId={activeChat.id} />

      <MessageInput />
    </section>
  );
};

export default ChatWindow;

// import { chats } from "@/data/mockChats";
// import { useChatStore } from "@/store/chatStore";

// import ChatHeader from "./ChatHeader";
// import MessageList from "./MessageList";

// const ChatWindow = () => {
//   const activeChatId = useChatStore((state) => state.activeChatId);

//   const activeChat = chats.find((chat) => chat.id === activeChatId);

//   if (!activeChat) {
//     return (
//       <section className="flex min-w-0 flex-1 items-center justify-center bg-[#f8f9fc]">
//         <p className="text-sm text-gray-400">
//           Select a chat to start messaging
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section className="flex min-w-0 flex-1 flex-col bg-[#f8f9fc]">
//       <ChatHeader user={activeChat.user} />

//       <MessageList chatId={activeChat.id} />

//       <div className="border-t border-gray-200 bg-white px-8 py-5">
//         <div className="flex items-center gap-3">
//           <input
//             type="text"
//             placeholder="Write a message..."
//             className="h-12 flex-1 rounded-xl bg-gray-100 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-gray-50 focus:ring-2 focus:ring-gray-200"
//           />

//           <button
//             type="button"
//             className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white transition hover:bg-blue-600"
//             aria-label="Send message"
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M22 2L11 13"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />

//               <path
//                 d="M22 2L15 22L11 13L2 9L22 2Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChatWindow;
