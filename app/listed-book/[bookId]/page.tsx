import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBooks } from "../../components/books/getbooks";

export default async function BookDetails({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const { bookId } = await params;

  const books = await getBooks();

  const book = books.find(
    (book) => book.bookId === Number(bookId)
  );

  if (!book) {
    notFound();
  }

 return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start">
        {/* Left Side: Book Image Box (Figma Layout অনুযায়ী Width বাড়ানো হয়েছে) */}
        <div className="bg-[#13131305] rounded-3xl p-8 flex items-center justify-center w-full md:w-[570px] h-[560px] sm:h-[640px] flex-shrink-0">
          <div className="relative w-full h-full max-w-[420px] max-h-[520px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              priority
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right Side: Book Details */}
        <div className="flex-1 w-full space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags?.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1.5 rounded-full font-medium text-xs sm:text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title & Author */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif leading-tight">
              {book.bookName}
            </h1>
            <p className="text-gray-600 font-medium text-base sm:text-lg mt-2">
              By : {book.author}
            </p>
          </div>

          <hr className="border-gray-200 my-4" />

          {/* Info Grid (Category, Rating, Pages, Published) */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="bg-[#13131305] p-3.5 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">Category</span>
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                {book.category}
              </span>
            </div>

            <div className="bg-[#13131305] p-3.5 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">Rating</span>
              <div className="flex items-center gap-1.5 font-semibold text-sm sm:text-base text-gray-800">
                <span className="text-amber-500">★</span>
                <span>{book.rating}</span>
              </div>
            </div>

            <div className="bg-[#13131305] p-3.5 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">Pages</span>
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                {book.totalPages}
              </span>
            </div>

            <div className="bg-[#13131305] p-3.5 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">Published</span>
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                {book.yearOfPublishing}
              </span>
            </div>
          </div>

          {/* Publisher */}
          {book.publisher && (
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-gray-900">Publisher</h3>
              <p className="text-sm text-gray-600 mt-0.5">{book.publisher}</p>
            </div>
          )}

          {/* Review / Description */}
          {book.review && (
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                Review
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "{book.review}"
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}