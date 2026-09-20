import { promises as fs } from "fs";
import path from "path";
import { Book } from "../../types/bookType";

export async function getBooks(): Promise<Book[]> {
  const filePath = path.join(process.cwd(), "public", "books.json");

  const file = await fs.readFile(filePath, "utf-8");

  const data = JSON.parse(file) as { books: Book[] };

  return data.books;
}