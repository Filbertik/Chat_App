import { useState } from "react";

import { useAuthStore } from "@/store/authStore";

type AuthMode = "login" | "register";

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isSubmitting = useAuthStore((state) => state.isSubmitting);

  const error = useAuthStore((state) => state.error);

  const login = useAuthStore((state) => state.login);

  const register = useAuthStore((state) => state.register);

  const clearError = useAuthStore((state) => state.clearError);

  const isRegister = mode === "register";

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    setPassword("");
    setConfirmPassword("");
    clearError();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail || !password) {
      return;
    }

    if (isRegister && password !== confirmPassword) {
      return;
    }

    try {
      if (isRegister) {
        await register(normalizedEmail, password);
      } else {
        await login(normalizedEmail, password);
      }
    } catch {
      // Error is already stored in authStore.
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            {isRegister ? "Create an account" : "Welcome back"}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {isRegister
              ? "Create your account to start messaging"
              : "Sign in to continue to your messages"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              autoComplete={isRegister ? "new-password" : "current-password"}
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-50"
            />
          </div>

          {isRegister && (
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>

              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                disabled={isSubmitting}
                className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-50"
              />

              {confirmPassword && password !== confirmPassword && (
                <p className="mt-2 text-xs text-red-500">
                  Passwords do not match.
                </p>
              )}
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={
              isSubmitting ||
              !email.trim() ||
              !password ||
              (isRegister && (!confirmPassword || password !== confirmPassword))
            }
            className="flex h-11 w-full items-center justify-center rounded-xl bg-blue-500 px-4 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            {isSubmitting
              ? "Please wait..."
              : isRegister
                ? "Create account"
                : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {isRegister ? "Already have an account?" : "Don't have an account?"}

          <button
            type="button"
            onClick={() => handleModeChange(isRegister ? "login" : "register")}
            disabled={isSubmitting}
            className="ml-1 font-medium text-blue-500 transition hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-400"
          >
            {isRegister ? "Sign in" : "Create one"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
