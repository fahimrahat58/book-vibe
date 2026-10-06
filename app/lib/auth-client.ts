import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://book-vibe-six-delta.vercel.app",
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  updateUser,
} = authClient;