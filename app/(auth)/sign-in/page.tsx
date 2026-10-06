"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/app/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data: resData, error } = await signIn.email({
        email,
        password,
        callbackURL: "/profile",
      });

      if (error) {
        setErrorMessage(error.message || "Something went wrong!");
        return;
      }

      console.log("Success:", resData);

      router.push("/");
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setErrorMessage("");

    try {
      const { error } = await signIn.social({
        provider: "google",
        callbackURL: "/profile",
      });

      if (error) {
        setErrorMessage(error.message || "Google sign in failed!");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Google sign in failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setFacebookLoading(true);
    setErrorMessage("");

    try {
      const { error } = await signIn.social({
        provider: "facebook",
        callbackURL: "/profile",
      });

      if (error) {
        setErrorMessage(error.message || "Facebook sign in failed!");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Facebook sign in failed. Please try again.");
    } finally {
      setFacebookLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Book <span className="text-[#23BE0A]">Vibe</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">Sign in to your account</p>
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none focus:ring-2 focus:ring-[#23BE0A]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none focus:ring-2 focus:ring-[#23BE0A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading || googleLoading || facebookLoading}
            className="w-full cursor-pointer! rounded-xl bg-[#23BE0A] px-4 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-[#1fa909] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>

          <span className="text-xs font-medium text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading || googleLoading || facebookLoading}
          className="flex w-full cursor-pointer! items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {googleLoading ? (
            "Signing in with Google..."
          ) : (
            <>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.805 12.23c0-.79-.065-1.54-.2-2.27H12v4.3h5.49a4.7 4.7 0 0 1-2.04 3.08v2.56h3.3c1.93-1.78 3.055-4.4 3.055-7.67Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 22c2.76 0 5.07-.91 6.76-2.47l-3.3-2.56c-.91.61-2.07.98-3.46.98-2.66 0-4.92-1.8-5.73-4.22H2.86v2.64A10.2 10.2 0 0 0 12 22Z"
                  fill="#34A853"
                />
                <path
                  d="M6.27 13.73A6.1 6.1 0 0 1 5.95 12c0-.6.11-1.19.32-1.73V7.63H2.86A10.02 10.02 0 0 0 1.8 12c0 1.61.39 3.14 1.06 4.37l3.41-2.64Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 6.05c1.5 0 2.84.52 3.9 1.54l2.92-2.92C17.07 3.04 14.76 2 12 2a10.2 10.2 0 0 0-9.14 5.63l3.41 2.64C7.08 7.85 9.34 6.05 12 6.05Z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleFacebookSignIn}
          disabled={loading || googleLoading || facebookLoading}
          className="mt-3 flex w-full cursor-pointer! items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {facebookLoading ? (
            "Signing in with Facebook..."
          ) : (
            <>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.093 10.125 24V15.563H7.078V12.073H10.125V9.413C10.125 6.387 11.917 4.716 14.658 4.716C15.97 4.716 17.344 4.951 17.344 4.951V7.925H15.83C14.34 7.925 13.875 8.853 13.875 9.805V12.073H17.203L16.671 15.563H13.875V24C19.612 23.093 24 18.099 24 12.073Z"
                  fill="#1877F2"
                />
              </svg>
              Sign in with Facebook
            </>
          )}
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="font-semibold cursor-pointer! text-[#59C6D2] hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
