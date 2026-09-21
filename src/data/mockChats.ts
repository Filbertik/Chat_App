import type { Chat, Message, User } from "@/types/chat";

export const currentUser: User = {
  id: "current-user",
  name: "You",
  avatar: "https://i.pravatar.cc/150?img=12",
  isOnline: true,
  lastSeen: null,
};

export const users: User[] = [
  {
    id: "user-1",
    name: "John Smith",
    avatar: "https://i.pravatar.cc/150?img=11",
    isOnline: true,
    lastSeen: null,
  },
  {
    id: "user-2",
    name: "Sarah Wilson",
    avatar: "https://i.pravatar.cc/150?img=32",
    isOnline: false,
    lastSeen: "Today at 09:32",
  },
  {
    id: "user-3",
    name: "Alex Brown",
    avatar: "https://i.pravatar.cc/150?img=13",
    isOnline: true,
    lastSeen: null,
  },
  {
    id: "user-4",
    name: "Emily Davis",
    avatar: "https://i.pravatar.cc/150?img=44",
    isOnline: false,
    lastSeen: "Yesterday at 18:45",
  },
];

export const messages: Message[] = [
  {
    id: "message-1",
    chatId: "chat-1",
    senderId: "user-1",
    text: "Hey! How are you?",
    createdAt: "2026-09-18T10:20:00.000Z",
    isRead: true,
    isEdited: false,
  },
  {
    id: "message-2",
    chatId: "chat-1",
    senderId: "current-user",
    text: "Hi! I'm good, thanks!",
    createdAt: "2026-09-18T10:21:00.000Z",
    isRead: true,
    isEdited: false,
  },
  {
    id: "message-3",
    chatId: "chat-1",
    senderId: "user-1",
    text: "What are you working on?",
    createdAt: "2026-09-18T10:22:00.000Z",
    isRead: true,
    isEdited: false,
  },
  {
    id: "message-4",
    chatId: "chat-1",
    senderId: "current-user",
    text: "I'm building a new React project.",
    createdAt: "2026-09-18T10:23:00.000Z",
    isRead: true,
    isEdited: false,
  },
  {
    id: "message-5",
    chatId: "chat-2",
    senderId: "user-2",
    text: "See you tomorrow!",
    createdAt: "2026-09-18T09:45:00.000Z",
    isRead: false,
    isEdited: false,
  },
  {
    id: "message-6",
    chatId: "chat-3",
    senderId: "user-3",
    text: "Thanks!",
    createdAt: "2026-09-17T18:20:00.000Z",
    isRead: false,
    isEdited: false,
  },
];

export const chats: Chat[] = [
  {
    id: "chat-1",
    user: users[0],
    lastMessage: messages[3],
    unreadCount: 0,
  },
  {
    id: "chat-2",
    user: users[1],
    lastMessage: messages[4],
    unreadCount: 2,
  },
  {
    id: "chat-3",
    user: users[2],
    lastMessage: messages[5],
    unreadCount: 1,
  },
  {
    id: "chat-4",
    user: users[3],
    lastMessage: {
      id: "message-7",
      chatId: "chat-4",
      senderId: "user-4",
      text: "Let's talk later.",
      createdAt: "2026-09-15T18:45:00.000Z",
      isRead: true,
      isEdited: false,
    },
    unreadCount: 0,
  },
];

// import type { Chat, Message, User } from "@/types/chat";

// export const currentUser: User = {
//   id: "current-user",
//   name: "You",
//   avatar: "https://i.pravatar.cc/150?img=12",
//   isOnline: true,
//   lastSeen: null,
// };

// export const users: User[] = [
//   {
//     id: "user-1",
//     name: "John Smith",
//     avatar: "https://i.pravatar.cc/150?img=11",
//     isOnline: true,
//     lastSeen: null,
//   },
//   {
//     id: "user-2",
//     name: "Sarah Wilson",
//     avatar: "https://i.pravatar.cc/150?img=32",
//     isOnline: false,
//     lastSeen: "Today at 09:32",
//   },
//   {
//     id: "user-3",
//     name: "Alex Brown",
//     avatar: "https://i.pravatar.cc/150?img=13",
//     isOnline: true,
//     lastSeen: null,
//   },
//   {
//     id: "user-4",
//     name: "Emily Davis",
//     avatar: "https://i.pravatar.cc/150?img=44",
//     isOnline: false,
//     lastSeen: "Yesterday at 18:45",
//   },
// ];

// export const messages: Message[] = [
//   {
//     id: "message-1",
//     chatId: "chat-1",
//     senderId: "user-1",
//     text: "Hey! How are you?",
//     createdAt: "2026-09-18T10:20:00.000Z",
//     isRead: true,
//   },
//   {
//     id: "message-2",
//     chatId: "chat-1",
//     senderId: "current-user",
//     text: "Hi! I'm good, thanks!",
//     createdAt: "2026-09-18T10:21:00.000Z",
//     isRead: true,
//   },
//   {
//     id: "message-3",
//     chatId: "chat-1",
//     senderId: "user-1",
//     text: "What are you working on?",
//     createdAt: "2026-09-18T10:22:00.000Z",
//     isRead: true,
//   },
//   {
//     id: "message-4",
//     chatId: "chat-1",
//     senderId: "current-user",
//     text: "I'm building a new React project.",
//     createdAt: "2026-09-18T10:23:00.000Z",
//     isRead: true,
//   },
//   {
//     id: "message-5",
//     chatId: "chat-2",
//     senderId: "user-2",
//     text: "See you tomorrow!",
//     createdAt: "2026-09-18T09:45:00.000Z",
//     isRead: false,
//   },
//   {
//     id: "message-6",
//     chatId: "chat-3",
//     senderId: "user-3",
//     text: "Thanks!",
//     createdAt: "2026-09-17T18:20:00.000Z",
//     isRead: false,
//   },
// ];

// export const chats: Chat[] = [
//   {
//     id: "chat-1",
//     user: users[0],
//     lastMessage: messages[3],
//     unreadCount: 0,
//   },
//   {
//     id: "chat-2",
//     user: users[1],
//     lastMessage: messages[4],
//     unreadCount: 2,
//   },
//   {
//     id: "chat-3",
//     user: users[2],
//     lastMessage: messages[5],
//     unreadCount: 1,
//   },
//   {
//     id: "chat-4",
//     user: users[3],
//     lastMessage: {
//       id: "message-7",
//       chatId: "chat-4",
//       senderId: "user-4",
//       text: "Let's talk later.",
//       createdAt: "2026-09-15T18:45:00.000Z",
//       isRead: true,
//     },
//     unreadCount: 0,
//   },
// ];
