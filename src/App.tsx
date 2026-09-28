import { useEffect } from "react";
import AuthPage from "@/components/auth/AuthPage";
import ChatLayout from "@/components/chat/ChatLayout";
import { useAuthStore } from "@/store/authStore";
const App = () => {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  useEffect(() => {
    const unsubscribe = initializeAuth();
    return unsubscribe;
  }, [initializeAuth]);
  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb]">
        {" "}
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />{" "}
      </main>
    );
  }
  if (!user) {
    return <AuthPage />;
  }
  return <ChatLayout />;
};
export default App;

// import { useEffect } from "react";
// import ChatLayout from "@/components/chat/ChatLayout";
// import { useAuthStore } from "@/store/authStore";
// const App = () => {
//   const initializeAuth = useAuthStore((state) => state.initializeAuth);
//   useEffect(() => {
//     const unsubscribe = initializeAuth();
//     return unsubscribe;
//   }, [initializeAuth]);
//   return <ChatLayout />;
// };
// export default App;
