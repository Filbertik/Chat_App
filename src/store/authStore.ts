import { create } from "zustand";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";

// import { auth } from "@/firebase/auth";

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isSubmitting: boolean;
  error: string | null;

  initializeAuth: () => () => void;

  login: (email: string, password: string) => Promise<void>;

  register: (email: string, password: string) => Promise<void>;

  logout: () => Promise<void>;

  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  isSubmitting: false,
  error: null,

  initializeAuth: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({
        user,
        isLoading: false,
      });
    });

    return unsubscribe;
  },

  login: async (email, password) => {
    set({
      isSubmitting: true,
      error: null,
    });

    try {
      await signInWithEmailAndPassword(auth, email, password);

      set({
        isSubmitting: false,
      });
    } catch (error) {
      console.error("Login error:", error);

      set({
        isSubmitting: false,
        error: getAuthErrorMessage(error),
      });

      throw error;
    }
  },

  register: async (email, password) => {
    set({
      isSubmitting: true,
      error: null,
    });

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      set({
        isSubmitting: false,
      });
    } catch (error) {
      console.error("Registration error:", error);

      set({
        isSubmitting: false,
        error: getAuthErrorMessage(error),
      });

      throw error;
    }
  },

  logout: async () => {
    set({
      isSubmitting: true,
      error: null,
    });

    try {
      await signOut(auth);

      set({
        isSubmitting: false,
      });
    } catch (error) {
      console.error("Logout error:", error);

      set({
        isSubmitting: false,
        error: getAuthErrorMessage(error),
      });

      throw error;
    }
  },

  clearError: () => {
    set({
      error: null,
    });
  },
}));

const getAuthErrorMessage = (error: unknown): string => {
  if (error && typeof error === "object" && "code" in error) {
    const code = error.code;

    if (typeof code === "string") {
      switch (code) {
        case "auth/invalid-email":
          return "Please enter a valid email address.";

        case "auth/user-not-found":
          return "No account found with this email.";

        case "auth/wrong-password":
          return "Incorrect email or password.";

        case "auth/invalid-credential":
          return "Incorrect email or password.";

        case "auth/email-already-in-use":
          return "An account with this email already exists.";

        case "auth/weak-password":
          return "Password must contain at least 6 characters.";

        case "auth/too-many-requests":
          return "Too many attempts. Please try again later.";

        case "auth/network-request-failed":
          return "Network error. Please check your connection.";

        default:
          return "Something went wrong. Please try again.";
      }
    }
  }

  return "Something went wrong. Please try again.";
};

// import { create } from "zustand";
// import { onAuthStateChanged, type User } from "firebase/auth";

// import { auth } from "@/firebase/auth";

// interface AuthStore {
//   user: User | null;
//   isLoading: boolean;
//   initializeAuth: () => () => void;
// }

// export const useAuthStore = create<AuthStore>((set) => ({
//   user: null,
//   isLoading: true,

//   initializeAuth: () => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       set({
//         user,
//         isLoading: false,
//       });
//     });

//     return unsubscribe;
//   },
// }));
