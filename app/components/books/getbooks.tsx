import { Book } from "../../types/bookType";

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const books: Book[] = await res.json();

  return books;
}