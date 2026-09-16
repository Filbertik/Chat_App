import { useChatStore } from "@/store/chatStore";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  // Отримуємо актуальний список чатів та функції зі стору zustand
  const chats = useChatStore((state) => state.chats);
  const searchQuery = useChatStore((state) => state.searchQuery);
  const setSearchQuery = useChatStore((state) => state.setSearchQuery);

  const filteredChats = chats.filter((chat) =>
    chat.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <aside className="flex h-full w-[360px] shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>

        <div className="relative mt-5">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search chats..."
            className="h-11 w-full rounded-xl bg-gray-100 px-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-gray-50 focus:ring-2 focus:ring-gray-200"
          />

          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatListItem key={chat.id} chat={chat} />
          ))
        ) : (
          <div className="px-6 py-10 text-center">
            <p className="text-sm text-gray-400">No chats found</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ChatList;

// // import { chats } from "@/data/mockChats";
// import chats from "@/data/mockChats";
// // import { mockChats as chats } from "@/data/mockChats";
// import { useChatStore } from "@/store/chatStore";

// import ChatListItem from "./ChatListItem";

// const ChatList = () => {
//   const searchQuery = useChatStore((state) => state.searchQuery);
//   const setSearchQuery = useChatStore((state) => state.setSearchQuery);

//   const filteredChats = chats.filter((chat) =>
//     chat.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   return (
//     <aside className="flex h-full w-[360px] shrink-0 flex-col border-r border-gray-200 bg-white">
//       <div className="border-b border-gray-200 px-6 py-5">
//         <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>

//         <div className="relative mt-5">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(event) => setSearchQuery(event.target.value)}
//             placeholder="Search chats..."
//             className="h-11 w-full rounded-xl bg-gray-100 px-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-gray-50 focus:ring-2 focus:ring-gray-200"
//           />

//           <svg
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>
//       </div>

//       <div className="flex-1 overflow-y-auto">
//         {filteredChats.length > 0 ? (
//           filteredChats.map((chat) => (
//             <ChatListItem key={chat.id} chat={chat} />
//           ))
//         ) : (
//           <div className="px-6 py-10 text-center">
//             <p className="text-sm text-gray-400">No chats found</p>
//           </div>
//         )}
//       </div>
//     </aside>
//   );
// };

// export default ChatList;

// // import { chats } from "@/data/mockChats";

// // import ChatListItem from "./ChatListItem";

// // const ChatList = () => {
// //   return (
// //     <aside className="flex h-full w-[360px] shrink-0 flex-col border-r border-gray-200 bg-white">
// //       <div className="border-b border-gray-200 px-6 py-5">
// //         <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>

// //         <div className="relative mt-5">
// //           <input
// //             type="text"
// //             placeholder="Search chats..."
// //             className="h-11 w-full rounded-xl bg-gray-100 px-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-gray-50 focus:ring-2 focus:ring-gray-200"
// //           />

// //           <svg
// //             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// //             width="18"
// //             height="18"
// //             viewBox="0 0 24 24"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //             />
// //           </svg>
// //         </div>
// //       </div>

// //       <div className="flex-1 overflow-y-auto">
// //         {chats.map((chat) => (
// //           <ChatListItem key={chat.id} chat={chat} />
// //         ))}
// //       </div>
// //     </aside>
// //   );
// // };

// // export default ChatList;
