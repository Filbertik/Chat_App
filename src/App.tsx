import { useEffect } from "react";
import ChatLayout from "@/components/chat/ChatLayout";
import { useAuthStore } from "@/store/authStore";
const App = () => {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  useEffect(() => {
    const unsubscribe = initializeAuth();
    return unsubscribe;
  }, [initializeAuth]);
  return <ChatLayout />;
};
export default App;
