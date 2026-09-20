# 📚 Book Vibe

A modern and responsive **Book Management & Reading Tracker** built with **Next.js, TypeScript, Tailwind CSS, DaisyUI, React Context API, Recharts, and JSON Server**.

Book Vibe helps users explore books, view detailed information, create a personal reading list, manage a wishlist, and visualize their reading list through an interactive chart.

## 🌐 Live Website

🚀 **Live Demo:**
https://book-vibe-six-delta.vercel.app/

---

## ✨ Features

* 📚 Browse a collection of books
* 🔎 View detailed information for each book
* 📖 Add books to the **Read List**
* ❤️ Add books to the **Wishlist**
* 🔄 Remove books from Read List or Wishlist
* 📊 Visualize book pages using an interactive bar chart
* ↕️ Sort books by:

  * Pages: Low → High
  * Pages: High → Low
  * Publish Year: Old → New
  * Publish Year: New → Old
  * Rating: Low → High
  * Rating: High → Low
* 🔗 Dynamic book details pages
* ❌ Custom Not Found handling
* 📱 Fully responsive design
* 🔔 Toast notifications for user actions
* ⚡ Server-side data fetching with Next.js
* 🧩 Context API for managing reading and wishlist data
* 🎨 Modern UI with Tailwind CSS and DaisyUI

---

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **React Context API**
* **Recharts**
* **React Toastify**
* **JSON Server**
* **Vercel**

---

## 📂 Project Structure

```text
app/
├── books/
│   ├── page.tsx
│   └── [bookId]/
│       └── page.tsx
│
├── listed-book/
│   └── page.tsx
│
├── pages-to-read/
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── books/
│   │   ├── PageChart.tsx
│   │   ├── book-action.tsx
│   │   ├── getbooks.ts
│   │   └── context/
│   │       └── book-context.tsx
│   │
│   └── ...
│
├── layout.tsx
├── page.tsx
└── globals.css

types/
└── bookType.ts

db.json
next.config.ts
package.json
```

---

## 📖 Main Pages

### 🏠 Home

Introduces the Book Vibe application and displays featured books.

### 📚 Books

Displays the available books with their:

* Title
* Author
* Category
* Rating
* Pages
* Publication year
* Publisher

### 📋 Listed Books

Contains two sections:

* Read Books
* Wishlist Books

Books can also be sorted based on pages, rating, and publication year.

### 📊 Pages to Read

Displays reading statistics and an interactive bar chart showing the number of pages in each book added to the Read List.

### 📖 Book Details

Each book has a dynamic route:

```text
/books/[bookId]
```

The details page displays the book cover, title, author, category, rating, pages, publisher, publication year, review, and reading actions.

---

## 🧠 Key Concepts Practiced

This project was built while learning and practicing:

* Next.js App Router

