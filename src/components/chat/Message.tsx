import { useState } from "react";

import type { Message as MessageType } from "@/types/chat";
import { useChatStore } from "@/store/chatStore";

interface MessageProps {
  message: MessageType;
  isOwn: boolean;
}

const Message = ({ message, isOwn }: MessageProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(message.text);

  const editMessage = useChatStore((state) => state.editMessage);
  const deleteMessage = useChatStore((state) => state.deleteMessage);

  const handleEditStart = () => {
    setEditText(message.text);
    setIsEditing(true);
    setIsMenuOpen(false);
  };

  const handleEditCancel = () => {
    setEditText(message.text);
    setIsEditing(false);
  };

  const handleEditSave = () => {
    if (!editText.trim()) {
      return;
    }

    editMessage(message.id, editText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!shouldDelete) {
      return;
    }

    deleteMessage(message.id);
    setIsMenuOpen(false);
  };

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[65%]">
        {isEditing ? (
          <div className="rounded-2xl rounded-br-md bg-blue-500 p-3">
            <textarea
              value={editText}
              onChange={(event) => setEditText(event.target.value)}
              rows={2}
              autoFocus
              className="w-full resize-none rounded-lg bg-white px-3 py-2 text-sm text-gray-700 outline-none"
            />

            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleEditCancel}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-white transition hover:bg-blue-600"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleEditSave}
                disabled={!editText.trim()}
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-blue-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
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

              <div
                className={`mt-1 flex items-center gap-1 ${
                  isOwn ? "justify-end" : "justify-start"
                }`}
              >
                {message.isEdited && (
                  <span
                    className={
                      isOwn
                        ? "text-[10px] text-blue-100"
                        : "text-[10px] text-gray-400"
                    }
                  >
                    edited
                  </span>
                )}

                <span
                  className={
                    isOwn ? "text-xs text-blue-100" : "text-xs text-gray-400"
                  }
                >
                  {new Date(message.createdAt).toLocaleTimeString("uk-UA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            {isOwn && (
              <div className="absolute -right-10 top-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((value) => !value)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-200 hover:text-gray-600"
                  aria-label="Message actions"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="19" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 top-9 z-10 w-32 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg">
                    <button
                      type="button"
                      onClick={handleEditStart}
                      className="flex w-full px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={handleDelete}
                      className="flex w-full px-4 py-2 text-left text-sm text-red-500 transition hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {!isEditing && (
          <span
            className={`mt-1 block text-xs text-gray-400 ${
              isOwn ? "text-right" : "text-left"
            }`}
          >
            {message.isRead && isOwn ? "Read" : ""}
          </span>
        )}
      </div>
    </div>
  );
};

export default Message;

// import type { Message as MessageType } from "@/types/chat";

// interface MessageProps {
//   message: MessageType;
//   isOwn: boolean;
// }

// const Message = ({ message, isOwn }: MessageProps) => {
//   return (
//     <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
//       <div className="max-w-[65%]">
//         <div
//           className={
//             isOwn
//               ? "rounded-2xl rounded-br-md bg-blue-500 px-4 py-3"
//               : "rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm"
//           }
//         >
//           <p
//             className={
//               isOwn
//                 ? "text-sm leading-5 text-white"
//                 : "text-sm leading-5 text-gray-700"
//             }
//           >
//             {message.text}
//           </p>
//         </div>

//         <span
//           className={`mt-1 block text-xs text-gray-400 ${
//             isOwn ? "text-right" : "text-left"
//           }`}
//         >
//           {message.createdAt}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Message;
