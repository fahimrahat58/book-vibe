import { Book } from "../../types/bookType";

export async function getBooks(): Promise<Book[]> {
  const res = await fetch("http://localhost:4000/books", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const books: Book[] = await res.json();

  return books;
}