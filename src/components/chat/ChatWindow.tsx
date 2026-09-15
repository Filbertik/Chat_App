import MessageList from "./MessageList";

const ChatWindow = () => {
  return (
    <section className="flex min-w-0 flex-1 flex-col bg-[#f8f9fc]">
      <header className="flex h-[76px] shrink-0 items-center border-b border-gray-200 bg-white px-8">
        <div className="relative shrink-0">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="John Smith"
            className="h-11 w-11 rounded-full object-cover"
          />

          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        </div>

        <div className="ml-3">
          <h2 className="text-sm font-semibold text-gray-900">John Smith</h2>

          <p className="mt-0.5 text-xs text-green-500">Online</p>
        </div>
      </header>

      <MessageList chatId="chat-1" />

      <div className="border-t border-gray-200 bg-white px-8 py-5">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Write a message..."
            className="h-12 flex-1 rounded-xl bg-gray-100 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-gray-50 focus:ring-2 focus:ring-gray-200"
          />

          <button
            type="button"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white transition hover:bg-blue-600"
            aria-label="Send message"
          >
            <svg
              width="20"
              height="20"
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
      </div>
    </section>
  );
};

export default ChatWindow;

// const ChatWindow = () => {
//   return (
//     <section className="flex min-w-0 flex-1 flex-col bg-[#f8f9fc]">
//       <header className="flex h-[76px] shrink-0 items-center border-b border-gray-200 bg-white px-8">
//         <div className="relative shrink-0">
//           <img
//             src="https://i.pravatar.cc/150?img=11"
//             alt="John Smith"
//             className="h-11 w-11 rounded-full object-cover"
//           />

//           <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
//         </div>

//         <div className="ml-3">
//           <h2 className="text-sm font-semibold text-gray-900">John Smith</h2>

//           <p className="mt-0.5 text-xs text-green-500">Online</p>
//         </div>
//       </header>

//       <div className="flex flex-1 flex-col justify-end overflow-y-auto px-8 py-6">
//         <div className="flex flex-col gap-4">
//           <div className="flex justify-start">
//             <div className="max-w-[65%]">
//               <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
//                 <p className="text-sm leading-5 text-gray-700">
//                   Hey! How are you?
//                 </p>
//               </div>

//               <span className="mt-1 block text-xs text-gray-400">10:20</span>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <div className="max-w-[65%]">
//               <div className="rounded-2xl rounded-br-md bg-blue-500 px-4 py-3">
//                 <p className="text-sm leading-5 text-white">
//                   Hi! I'm good, thanks!
//                 </p>
//               </div>

//               <span className="mt-1 block text-right text-xs text-gray-400">
//                 10:21
//               </span>
//             </div>
//           </div>

//           <div className="flex justify-start">
//             <div className="max-w-[65%]">
//               <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
//                 <p className="text-sm leading-5 text-gray-700">
//                   What are you working on?
//                 </p>
//               </div>

//               <span className="mt-1 block text-xs text-gray-400">10:22</span>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <div className="max-w-[65%]">
//               <div className="rounded-2xl rounded-br-md bg-blue-500 px-4 py-3">
//                 <p className="text-sm leading-5 text-white">
//                   I'm building a new React project.
//                 </p>
//               </div>

//               <span className="mt-1 block text-right text-xs text-gray-400">
//                 10:23
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

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
