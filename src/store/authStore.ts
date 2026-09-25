import { create } from "zustand";
import {
  onAuthStateChanged,
  type User,
} from "firebase/auth";

import { auth } from "@/firebase/auth";

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  initializeAuth: () => () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,

  initializeAuth: () => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        set({
          user,
          isLoading: false,
        });
      },
    );

    return unsubscribe;
  },
}));
```;
