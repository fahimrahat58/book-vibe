"use client";

import { createContext, useContext, useEffect, useState } from "react";
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

  // Load data from localStorage
  useEffect(() => {
    const savedReadList = localStorage.getItem("book-vibe-read-list");
    const savedWishlist = localStorage.getItem("book-vibe-wishlist");

    if (savedReadList) {
      setReadList(JSON.parse(savedReadList));
    }

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save read list to localStorage
  useEffect(() => {
    localStorage.setItem("book-vibe-read-list", JSON.stringify(readList));
  }, [readList]);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("book-vibe-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

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