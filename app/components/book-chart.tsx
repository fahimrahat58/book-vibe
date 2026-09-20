"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { Book } from  '../types/bookType';

const colors = [
  "#23BE0A",
  "#3B82F6",
  "#F59E0B",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
];

export default function BookChart({ books }: { books: Book[] }) {
  const data = books.map((book) => ({
    name:
      book.bookName.length > 12
        ? `${book.bookName.slice(0, 12)}...`
        : book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Pages to Read</h2>

        <p className="mt-1 text-sm text-gray-500">
          Compare the total pages of your read list
        </p>
      </div>

      {data.length === 0 ? (
        <div className="flex h-[350px] items-center justify-center">
          <p className="text-gray-500">No books added to your Read List yet.</p>
        </div>
      ) : (
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: 0,
                bottom: 70,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="name"
                angle={-25}
                textAnchor="end"
                height={80}
                tick={{
                  fontSize: 12,
                  fill: "#6B7280",
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fontSize: 12,
                  fill: "#6B7280",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                cursor={{
                  fill: "#23BE0A",
                  fillOpacity: 0.08,
                }}
                formatter={(value) => [`${value} pages`, "Pages"]}
              />

              <Bar dataKey="pages" radius={[8, 8, 0, 0]} barSize={45}>
                {data.map((_, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
