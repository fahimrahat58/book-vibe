"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, updateUser, signOut } from "@/app/lib/auth-client";

export default function ProfilePage() {
  const router = useRouter();

  const { data: session, isPending } = useSession();

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
    }
  }, [session]);

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const { error } = await updateUser({
        name,
      });

      if (error) {
        setMessage(error.message || "Failed to update profile.");
        return;
      }

      setMessage("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  if (isPending) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Please Sign In</h1>

          <p className="mt-2 text-gray-500">
            You need to sign in to view your profile.
          </p>

          <Link
            href="/signin"
            className="inline-block mt-5 px-5 py-2.5 bg-[#23BE0A] hover:bg-[#1fa909] text-white rounded-lg font-semibold"
          >
            Sign In
          </Link>
        </div>
      </main>
    );
  }

  const user = session.user;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-[#23BE0A]/5 px-6 py-8 text-center border-b border-gray-100">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#23BE0A]/10 border-4 border-[#23BE0A] flex items-center justify-center text-3xl font-bold text-[#23BE0A]">
              {user.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              {user.name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
          </div>

          {/* User Information */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Profile Information
            </h2>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <p className="text-sm font-medium text-gray-500">Full Name</p>

                <p className="mt-1 text-base font-semibold text-gray-900">
                  {user.name}
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Email Address
                </p>

                <p className="mt-1 text-base font-semibold text-gray-900">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Message */}
            {message && (
              <div className="mt-6 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                {message}
              </div>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsEditing(!isEditing);
                  setMessage("");
                }}
                className="flex-1 bg-[#23BE0A] hover:bg-[#1fa909] text-white px-5 py-3 rounded-xl font-semibold transition"
              >
                {isEditing ? "Cancel Update" : "Update Profile"}
              </button>

              <button
                onClick={handleSignOut}
                className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 px-5 py-3 rounded-xl font-semibold transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Update Form */}
        {isEditing && (
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Update Profile
            </h2>

            <form onSubmit={handleUpdateProfile} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 outline-none focus:ring-2 focus:ring-[#23BE0A] focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-500 outline-none cursor-not-allowed"
                />

                <p className="mt-1 text-xs text-gray-400">
                  Email address cannot be changed here.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#23BE0A] hover:bg-[#1fa909] text-white px-5 py-3 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
