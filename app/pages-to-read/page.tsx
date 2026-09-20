"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";

import { useBook } from "../components/books/context/book-context";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

export default function PageChart() {
  const { readList } = useBook();

  const data = readList.map((book) => ({
    name:
      book.bookName.length > 12
        ? `${book.bookName.slice(0, 12)}...`
        : book.bookName,
    pages: book.totalPages,
  }));

  if (readList.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-3xl bg-white shadow-sm">
        <p className="text-gray-500">
          Add books to your Read List to see the chart.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-3xl bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Pages to Read
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Number of pages in each book
        </p>
      </div>

      <div className="flex justify-center">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "900px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid />

          <Tooltip
            cursor={{
              fillOpacity: 0.5,
            }}
          />

          <XAxis dataKey="name" />

          <YAxis width="auto" />

          <Bar dataKey="pages" shape={TriangleBar} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
