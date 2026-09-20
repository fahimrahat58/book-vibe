"use client";

import Link from "next/link";
import { useState } from "react";
import { useBook } from "../components/books/context/book-context";

type SortOption =
  | "default"
  | "pages-low"
  | "pages-high"
  | "year-old"
  | "year-new"
  | "rating-low"
  | "rating-high";

export default function ListedBookPage() {
  const { readList, wishlist } = useBook();

  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortBooks = (books: typeof readList) => {
    const sortedBooks = [...books];

    switch (sortBy) {
      case "pages-low":
        return sortedBooks.sort((a, b) => a.totalPages - b.totalPages);

      case "pages-high":
        return sortedBooks.sort((a, b) => b.totalPages - a.totalPages);

      case "year-old":
        return sortedBooks.sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );

      case "year-new":
        return sortedBooks.sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing,
        );

      case "rating-low":
        return sortedBooks.sort((a, b) => a.rating - b.rating);

      case "rating-high":
        return sortedBooks.sort((a, b) => b.rating - a.rating);

      default:
        return sortedBooks;
    }
  };

  const sortedReadList = sortBooks(readList);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <main className="min-h-screen bg-base-200 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 rounded-2xl bg-base-100 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Listed Books
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your read list and wishlist
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-gray-800">Sort by</p>

              <p className="hidden text-xs text-gray-400 sm:block">
                Choose your preference
              </p>
            </div>

            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="h-11 min-w-[210px] appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm font-medium text-gray-700 shadow-sm outline-none transition hover:border-gray-300 focus:border-[#23BE0A] focus:ring-2 focus:ring-[#23BE0A]/10"
              >
                <option value="default">Default</option>

                <option value="pages-low">Pages: Low → High</option>

                <option value="pages-high">Pages: High → Low</option>

                <option value="year-old">Publish Year: Old → New</option>

                <option value="year-new">Publish Year: New → Old</option>

                <option value="rating-low">Rating: Low → High</option>

                <option value="rating-high">Rating: High → Low</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Read Books */}
        <section className="mb-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Read Books
            </h2>

            <span className="rounded-full bg-[#23BE0A0D] px-4 py-1.5 text-sm font-semibold text-[#23BE0A]">
              {readList.length} Books
            </span>
          </div>

          {sortedReadList.length === 0 ? (
            <div className="rounded-2xl bg-base-100 p-10 text-center shadow-sm">
              <p className="text-gray-500">
                You haven't added any books to your Read List yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sortedReadList.map((book) => (
                <div
                  key={book.bookId}
                  className="rounded-2xl bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Book Info */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-base-200">
                      <img
                        src={book.image}
                        alt={book.bookName}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-bold text-gray-900">
                        {book.bookName}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        By {book.author}
                      </p>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="mb-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-base-200 px-3 py-1">
                      {book.totalPages} Pages
                    </span>

                    <span className="rounded-full bg-base-200 px-3 py-1">
                      {book.yearOfPublishing}
                    </span>

                    <span className="rounded-full bg-base-200 px-3 py-1">
                      ⭐ {book.rating}
                    </span>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/listed-book/${book.bookId}`}
                    className="block rounded-lg bg-[#23BE0A] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#1fa308]"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Wishlist */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Wishlist
            </h2>

            <span className="rounded-full bg-[#23BE0A0D] px-4 py-1.5 text-sm font-semibold text-[#23BE0A]">
              {wishlist.length} Books
            </span>
          </div>

          {sortedWishlist.length === 0 ? (
            <div className="rounded-2xl bg-base-100 p-10 text-center shadow-sm">
              <p className="text-gray-500">
                You haven't added any books to your Wishlist yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sortedWishlist.map((book) => (
                <div
                  key={book.bookId}
                  className="rounded-2xl bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Book Info */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-base-200">
                      <img
                        src={book.image}
                        alt={book.bookName}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-bold text-gray-900">
                        {book.bookName}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        By {book.author}
                      </p>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="mb-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-base-200 px-3 py-1">
                      {book.totalPages} Pages
                    </span>

                    <span className="rounded-full bg-base-200 px-3 py-1">
                      {book.yearOfPublishing}
                    </span>

                    <span className="rounded-full bg-base-200 px-3 py-1">
                      ⭐ {book.rating}
                    </span>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/books/${book.bookId}`}
                    className="block rounded-lg border border-[#23BE0A] px-4 py-2.5 text-center text-sm font-semibold text-[#23BE0A] transition hover:bg-[#23BE0A] hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
