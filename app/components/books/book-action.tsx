"use client";

import { toast } from "react-toastify";
import { Book } from "../../types/bookType";
import { useBook } from "./context/book-context";

export default function BookActions({ book }: { book: Book }) {
  const { readList, wishlist, addToReadList, addToWishlist } = useBook();

  const alreadyRead = readList.some((item) => item.bookId === book.bookId);

  const alreadyWishlisted = wishlist.some(
    (item) => item.bookId === book.bookId,
  );

  const handleRead = () => {
    addToReadList(book);

    if (alreadyRead) {
      toast.info("Book removed from Read List!");
    } else {
      toast.success("Book added to Read List!");
    }
  };

  const handleWishlist = () => {
    addToWishlist(book);

    if (alreadyWishlisted) {
      toast.info("Book removed from Wishlist!");
    } else {
      toast.success("Book added to Wishlist!");
    }
  };

  return (
    <div className="flex justify-center gap-3 pt-6">
      <button
        onClick={handleRead}
        className={`rounded-lg px-7 py-3 text-sm font-semibold transition ${
          alreadyRead
            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
            : "bg-[#23BE0A] text-white hover:bg-[#1fa308]"
        }`}
      >
        {alreadyRead ? "Remove Read" : "Read"}
      </button>

      <button
        onClick={handleWishlist}
        className={`rounded-lg px-7 py-3 text-sm font-semibold transition ${
          alreadyWishlisted
            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
            : "border border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
        }`}
      >
        {alreadyWishlisted ? "Remove Wishlist" : "Wishlist"}
      </button>
    </div>
  );
}
