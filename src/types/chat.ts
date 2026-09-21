export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastSeen: string | null;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
  isRead: boolean;
  isEdited: boolean;
}

export interface Chat {
  id: string;
  user: User;
  lastMessage: Message;
  unreadCount: number;
}
