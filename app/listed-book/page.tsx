import Image from "next/image";
import Link from "next/link";
import { getBooks } from "../components/books/getbooks";

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="border border-gray-100 bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Book Image Box - Full Fill */}
            <div className="bg-[#13131305] rounded-2xl overflow-hidden flex items-center justify-center w-full md:w-56 h-64 flex-shrink-0 relative">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                priority
                className="object-cover p-4 rounded-2xl drop-shadow-md"
              />
            </div>

            {/* Book Details */}
            <div className="flex-1 w-full space-y-3">
              {/* Title & Author */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-serif">
                  {book.bookName}
                </h2>
                <p className="text-gray-600 font-medium text-sm mt-1">
                  By : {book.author}
                </p>
              </div>

              {/* Tags & Publishing Year */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">Tag</span>
                  {book.tags?.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-1 rounded-full font-medium text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {book.yearOfPublishing && (
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                  </div>
                )}
              </div>

              {/* Publisher & Pages */}
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-xs sm:text-sm">
                {book.publisher && (
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Publisher: {book.publisher}</span>
                  </div>
                )}

                {book.totalPages && (
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Page {book.totalPages}</span>
                  </div>
                )}
              </div>

              <hr className="border-gray-100 my-2" />

              {/* Bottom Badges and Action Button */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="bg-[#328EFF26] text-[#328EFF] text-xs font-semibold px-4 py-2 rounded-full">
                  Category: {book.category}
                </span>

                <span className="bg-[#FFAC3326] text-[#FFAC33] text-xs font-semibold px-4 py-2 rounded-full">
                  Rating: {book.rating}
                </span>

                <Link
                  href={`/listed-book/${book.bookId}`}
                  className="bg-[#23BE0A] hover:bg-[#1fa308] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors ml-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}