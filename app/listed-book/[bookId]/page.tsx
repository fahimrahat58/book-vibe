import Image from "next/image";

import { notFound } from "next/navigation";
import { getBooks } from "../../components/books/getbooks";
import BookActions from "../../components/books/book-action";

export default async function BookDetails({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const { bookId } = await params;

  const books = await getBooks();

  const book = books.find((book) => book.bookId === Number(bookId));

  if (!book) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-12">
        {/* Left Side: Book Image */}
        <div className="flex h-[560px] w-full flex-shrink-0 items-center justify-center rounded-3xl bg-[#13131305] p-8 sm:h-[640px] md:w-[570px]">
          <div className="relative h-full max-h-[520px] w-full max-w-[420px]">
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
        <div className="w-full flex-1 space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags?.map((tag: string, index: number) => (
              <span
                key={index}
                className="rounded-full bg-[#23BE0A0D] px-4 py-1.5 text-xs font-medium text-[#23BE0A] sm:text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title & Author */}
          <div>
            <h1 className="font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {book.bookName}
            </h1>

            <p className="mt-2 text-base font-medium text-gray-600 sm:text-lg">
              By : {book.author}
            </p>
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Info Grid */}
          <div className="grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#13131305] p-3.5">
              <span className="mb-1 block text-xs text-gray-400">Category</span>

              <span className="text-sm font-semibold text-gray-800 sm:text-base">
                {book.category}
              </span>
            </div>

            <div className="rounded-xl bg-[#13131305] p-3.5">
              <span className="mb-1 block text-xs text-gray-400">Rating</span>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 sm:text-base">
                <span className="text-amber-500">★</span>
                <span>{book.rating}</span>
              </div>
            </div>

            <div className="rounded-xl bg-[#13131305] p-3.5">
              <span className="mb-1 block text-xs text-gray-400">Pages</span>

              <span className="text-sm font-semibold text-gray-800 sm:text-base">
                {book.totalPages}
              </span>
            </div>

            <div className="rounded-xl bg-[#13131305] p-3.5">
              <span className="mb-1 block text-xs text-gray-400">
                Published
              </span>

              <span className="text-sm font-semibold text-gray-800 sm:text-base">
                {book.yearOfPublishing}
              </span>
            </div>
          </div>

          {/* Publisher */}
          {book.publisher && (
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-gray-900">Publisher</h3>

              <p className="mt-0.5 text-sm text-gray-600">{book.publisher}</p>
            </div>
          )}

          {/* Review */}
          {book.review && (
            <div className="pt-2">
              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                Review
              </h3>

              <p className="text-sm leading-relaxed text-gray-600 italic">
                "{book.review}"
              </p>
            </div>
          )}

         <div className="flex justify-center"> <BookActions book={book} /> </div>
        </div>
      </div>
    </main>
  );
}
