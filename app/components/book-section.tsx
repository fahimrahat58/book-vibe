import Image from "next/image";
import Link from "next/link";
import { getBooks } from "../components/books/getbooks";

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <main className="min-h-screen bg-[#F8F8F6] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#23BE0A]">
            Discover Your Next Read
          </p>

          <h1 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
            Books
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Explore our collection of inspiring stories, timeless classics,
            and unforgettable adventures.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Link
              href={`/listed-book/${book.bookId}`}
              key={book.bookId}
              className="group overflow-hidden rounded-3xl border border-gray-200/70 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Book Image */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-[#F3F4F1]">
                <div className="relative h-60 w-44 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
                  {book.category}
                </span>

                {/* Rating Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
                  <svg
                    className="h-4 w-4 fill-[#FFB400] text-[#FFB400]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
                  </svg>

                  {Number(book.rating).toFixed(1)}
                </div>
              </div>

              {/* Content */}
              <div className="px-2 pb-2 pt-5">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {book.tags?.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#23BE0A0D] px-3 py-1 text-xs font-semibold text-[#23BE0A]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="line-clamp-2 min-h-[56px] font-serif text-xl font-bold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-[#23BE0A]">
                  {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-2 text-sm font-medium text-gray-500">
                  By <span className="text-gray-700">{book.author}</span>
                </p>

                {/* Divider */}
                <div className="my-5 border-t border-dashed border-gray-200" />

                {/* Book Information */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div>
                    <p className="mb-1 text-gray-400">Pages</p>
                    <p className="font-semibold text-gray-700">
                      {book.totalPages}
                    </p>
                  </div>

                  <div className="h-8 border-l border-gray-200" />

                  <div>
                    <p className="mb-1 text-gray-400">Published</p>
                    <p className="font-semibold text-gray-700">
                      {book.yearOfPublishing}
                    </p>
                  </div>

                  <div className="h-8 border-l border-gray-200" />

                  <div className="text-right">
                    <p className="mb-1 text-gray-400">Publisher</p>
                    <p className="max-w-[100px] truncate font-semibold text-gray-700">
                      {book.publisher}
                    </p>
                  </div>
                </div>

                {/* View Details */}
                <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 transition-colors duration-200 group-hover:bg-[#23BE0A0D]">
                  <span className="text-sm font-semibold text-gray-700">
                    View Details
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all duration-200 group-hover:bg-[#23BE0A] group-hover:text-white">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}