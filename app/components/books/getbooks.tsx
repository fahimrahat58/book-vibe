import { Book } from "../../types/bookType";

export async function getBooks(): Promise<Book[]> {
  const res = await fetch("https://book-vibe-7si6r5lnw-programming-hero11.vercel.app/books.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data: { books: Book[] } = await res.json();

  return data.books;
}