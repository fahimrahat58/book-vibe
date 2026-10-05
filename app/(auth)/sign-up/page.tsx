"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/app/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const image = formData.get("image") as string;

    try {
      const { data: resData, error } = await signUp.email({
        name,
        email,
        password,
        image: image || undefined,
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

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    setErrorMessage("");

    try {
      const { error } = await signIn.social({
        provider: "google",
        callbackURL: "/profile",
      });

      if (error) {
        setErrorMessage(error.message || "Google sign up failed!");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Google sign up failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Book <span className="text-[#23BE0A]">Vibe</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">Create your new account</p>
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-[#23BE0A]"
            />
          </div>

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
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-[#23BE0A]"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Profile Image URL
            </label>

            <input
              id="image"
              name="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-[#23BE0A]"
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
              minLength={8}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-[#23BE0A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full rounded-xl cursor-pointer! bg-[#23BE0A] px-4 py-3 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-[#1fa909] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-medium text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loading || googleLoading}
          className="flex w-full items-center cursor-pointer! justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {googleLoading ? (
            "Signing up with Google..."
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
              Sign up with Google
            </>
          )}
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="font-semibold cursor-pointer! text-[#59C6D2] hover:underline"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
