"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/app/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
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
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(error.message || "Dogoggorri uumameera!");
        return;
      }

      console.log("Success:", resData);

      router.push("/");
    } catch (err) {
      console.error(err);
      setErrorMessage("Dogoggorri dhiyeessii uumameera.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Book <span className="text-[#23BE0A]">Vibe</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Akkaawuntii keessaniin seenaa
          </p>
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
              Imeelii
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="fahim@gmail.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none focus:ring-2 focus:ring-[#23BE0A]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Jechama Darbiinsaa
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
            disabled={loading}
            className="w-full rounded-xl bg-[#23BE0A] px-4 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-[#1fa909] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Seenaa jira..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Akkaawuntii hin qabduu?{" "}
          <a
            href="/signup"
            className="font-semibold text-[#59C6D2] hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
