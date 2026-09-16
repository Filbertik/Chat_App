export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
  isRead: boolean;
}

export interface Chat {
  id: string;
  user: User;
  lastMessage: Message;
  unreadCount: number;
}

// export interface User {
//   id: string;
//   name: string;
//   avatar: string;
//   isOnline: boolean;
// }

// export interface Message {
//   id: string;
//   chatId: string;
//   senderId: string;
//   text: string;
//   createdAt: string;
//   isRead: boolean;
// }

// export interface Chat {
//   id: string;
//   user: User;
//   lastMessage: Message;
//   unreadCount: number;
// }
