"use client";

import { createContext, useContext, useState } from "react";
import { Book } from "../../../types/bookType";

type BookContextType = {
  readList: Book[];
  wishlist: Book[];
  addToReadList: (book: Book) => void;
  addToWishlist: (book: Book) => void;
};

const BookContext = createContext<BookContextType | null>(null);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [readList, setReadList] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

  const addToReadList = (book: Book) => {
    setReadList((prev) => {
      const exists = prev.some((item) => item.bookId === book.bookId);

      if (exists) {
        return prev.filter((item) => item.bookId !== book.bookId);
      }

      return [...prev, book];
    });
  };

  const addToWishlist = (book: Book) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.bookId === book.bookId);

      if (exists) {
        return prev.filter((item) => item.bookId !== book.bookId);
      }

      return [...prev, book];
    });
  };

  return (
    <BookContext.Provider
      value={{
        readList,
        wishlist,
        addToReadList,
        addToWishlist,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useBook must be used inside BookProvider");
  }

  return context;
}
