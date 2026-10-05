"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/app/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const isActive = (path: string) => pathname === path;

  const handleSignOut = async () => {
    await signOut();

    router.push("/sign-in");
    router.refresh();
  };

  return (
    <nav className="w-full py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Book Vibe
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              isActive("/")
                ? "border border-[#23BE0A] text-[#23BE0A]"
                : "border border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Home
          </Link>

          <Link
            href="/listed-book"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              isActive("/listed-book")
                ? "border border-[#23BE0A] text-[#23BE0A]"
                : "border border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Listed Books
          </Link>

          <Link
            href="/pages-to-read"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              isActive("/pages-to-read")
                ? "border border-[#23BE0A] text-[#23BE0A]"
                : "border border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Pages to Read
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="text-sm text-gray-500">Loading...</div>
          ) : session?.user ? (
            <>
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-full transition-opacity hover:opacity-80"
              >
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-[#23BE0A] object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#23BE0A] bg-[#23BE0A]/10 text-sm font-bold text-[#23BE0A]">
                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}

                <span className="text-sm font-semibold text-gray-700">
                  Welcome, {session.user.name}
                </span>
              </Link>

              <button
                onClick={handleSignOut}
                className="rounded-lg bg-red-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-lg bg-[#23BE0A] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1fa308]"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="rounded-lg bg-[#59C6D2] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4bb1bd]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}