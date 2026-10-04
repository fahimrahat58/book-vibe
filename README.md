# 📚 Book Vibe

<p align="center">
  <strong>A Modern Book Management & Reading Tracker</strong>
</p>

<p align="center">
  Explore books, manage your reading list and wishlist, and track your reading progress with interactive charts.
</p>

<p align="center">
  <a href="https://book-vibe-six-delta.vercel.app/">
    🌐 Live Demo
  </a>
  &nbsp; • &nbsp;
  <a href="https://github.com/fahimrahat58/book-vibe">
    💻 GitHub Repository
  </a>
</p>

---

## 📌 Project Overview

**Book Vibe** is a modern and responsive **Book Management & Reading Tracker** built with **Next.js, TypeScript, Tailwind CSS, DaisyUI, React Context API, Recharts, and JSON Server**.

The application allows users to explore a collection of books, view detailed book information, create a personal reading list, manage a wishlist, sort books, and visualize their reading progress through interactive charts.

The project focuses on:

- 📚 Book discovery and management
- 📖 Personal reading list
- ❤️ Wishlist management
- 📊 Reading statistics
- 🔎 Dynamic book details
- 📱 Responsive design
- 🎨 Modern user interface

---

## 📸 Project Preview

<p align="center">
  <img
    src="./public/Screenshot 2026-10-04 213527.png"
    alt="Book Vibe Homepage"
    width="100%"
  />
</p>

<p align="center">
  <em>Book Vibe Homepage</em>
</p>

---

## ✨ Main Features

### 📚 Book Management

- Browse a collection of books
- View detailed information for each book
- Add books to the **Read List**
- Add books to the **Wishlist**
- Remove books from the Read List
- Remove books from the Wishlist

### 📊 Reading Statistics

- Interactive reading statistics
- Visualize book pages using a bar chart
- Track pages of books added to the Read List
- Reading progress visualization with **Recharts**

### ↕️ Book Sorting

Books can be sorted by:

- Pages: Low → High
- Pages: High → Low
- Publish Year: Old → New
- Publish Year: New → Old
- Rating: Low → High
- Rating: High → Low

### 🔎 Dynamic Book Details

Each book has its own dynamic details page.

```text
/books/[bookId]
```

The details page displays:

- 📖 Book cover
- 📚 Book title
- ✍️ Author
- 🏷️ Category
- ⭐ Rating
- 📄 Number of pages
- 🏢 Publisher
- 📅 Publication year
- 📝 Review
- 📋 Reading actions

### 🔔 User Feedback

- Toast notifications for user actions
- Clear feedback when adding or removing books

### ❌ Error Handling

- Custom Not Found page
- Handles invalid book routes gracefully

### 📱 Responsive Design

The application is fully responsive and works across:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js** | React framework and application architecture |
| **React** | Building user interfaces |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling and responsive design |
| **DaisyUI** | UI components and design utilities |
| **React Context API** | Global state management |
| **Recharts** | Interactive reading charts |
| **React Toastify** | Toast notifications |
| **JSON Server** | Local REST API and book data |
| **Vercel** | Deployment |

---

## 📦 Dependencies

Main project dependencies include:

- `next` — React framework
- `react` — UI library
- `react-dom` — React DOM rendering
- `typescript` — Type-safe development
- `tailwindcss` — Utility-first CSS framework
- `daisyui` — Tailwind CSS component library
- `recharts` — Data visualization and charts
- `react-toastify` — Toast notifications
- `json-server` — Local REST API server

For the complete and exact dependency list, check the project's `package.json` file.

---

## 📂 Project Structure

```text
book-vibe/
│
├── app/
│   ├── books/
│   │   ├── page.tsx
│   │   └── [bookId]/
│   │       └── page.tsx
│   │
│   ├── listed-book/
│   │   └── page.tsx
│   │
│   ├── pages-to-read/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── books/
│   │   │   ├── PageChart.tsx
│   │   │   ├── book-action.tsx
│   │   │   ├── getbooks.ts
│   │   │   └── context/
│   │   │       └── book-context.tsx
│   │   │
│   │   └── ...
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── types/
│   └── bookType.ts
│
├── public/
│   └── screenshots/
│       └── homepage.png
│
├── db.json
├── next.config.ts
├── package.json
└── README.md
```

---

## 📖 Main Pages

### 🏠 Home

The home page introduces the **Book Vibe** application and displays featured books.

### 📚 Books

The Books page displays the available books with information such as:

- Title
- Author
- Category
- Rating
- Pages
- Publication year
- Publisher

### 📋 Listed Books

The Listed Books page contains two sections:

- 📖 Read Books
- ❤️ Wishlist Books

Users can also sort their books based on:

- Pages
- Rating
- Publication year

### 📊 Pages to Read

The Pages to Read page displays reading statistics and an interactive bar chart showing the number of pages in each book added to the Read List.

### 📖 Book Details

Each book has a dynamic route:

```text
/books/[bookId]
```

The details page displays complete book information and allows users to perform reading-related actions.

---

## 🧠 Key Concepts Practiced

This project was built while learning and practicing:

- Next.js App Router
- React components
- TypeScript
- Dynamic routes
- Server-side data fetching
- React Context API
- State management
- REST API integration
- JSON Server
- Data visualization with Recharts
- Responsive UI development
- Tailwind CSS
- DaisyUI
- Toast notifications
- Error handling
- Vercel deployment

---

## 🚀 Getting Started

Follow these steps to run **Book Vibe** locally.

### 1. Clone the Repository

```bash
git clone https://github.com/fahimrahat58/book-vibe.git
```

### 2. Navigate to the Project

```bash
cd book-vibe
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start JSON Server

Open a terminal and run:

```bash
npx json-server --watch db.json --port 3001
```

The JSON Server will run at:

```text
http://localhost:3001
```

### 5. Start the Next.js Development Server

Open another terminal in the project folder and run:

```bash
npm run dev
```

The Next.js application will run at:

```text
http://localhost:3000
```

### 6. Open the Application

Visit:

```text
http://localhost:3000
```

---

## ⚙️ Local Development

For local development, two servers are required:

```text
┌─────────────────────────────┐
│       Next.js App           │
│       localhost:3000        │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│        JSON Server          │
│       localhost:3001        │
└──────────────┬──────────────┘
               │
               ▼
            db.json
```

Make sure both servers are running while using the application locally.

---

## 🌐 Live Project

<p align="center">

<a href="https://book-vibe-six-delta.vercel.app/">
  🚀 Visit Book Vibe
</a>

</p>

---

## 🔗 Relevant Links

| Resource | Link |
|---|---|
| 🌐 Live Website | [Book Vibe](https://book-vibe-six-delta.vercel.app/) |
| 💻 GitHub Repository | [Book Vibe Repository](https://github.com/fahimrahat58/book-vibe) |
| 👨‍💻 GitHub Profile | [Fahim Muntasir Rahat](https://github.com/fahimrahat58) |
| 💼 LinkedIn | [Fahim Muntasir Rahat](https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/) |

---

## 📸 Screenshots

### 🏠 Homepage

<p align="center">
  <img
    src="./public/Screenshot 2026-10-04 213527.png"
    alt="Book Vibe Homepage"
    width="100%"
  />
</p>

---

## 🎯 Project Goals

The main goals of this project are:

- Build a practical book management application
- Practice Next.js App Router
- Improve TypeScript skills
- Learn dynamic routing
- Practice state management with Context API
- Work with REST APIs
- Learn data visualization with Recharts
- Build responsive user interfaces
- Practice Tailwind CSS and DaisyUI
- Deploy a production-ready application

---

## 🔮 Future Improvements

Some possible future improvements include:

- 🔎 Advanced book search
- 👤 User authentication
- 📚 Personalized reading recommendations
- ⭐ Book reviews and ratings
- 💬 User comments
- 🔖 Advanced bookmarking
- 📈 More detailed reading statistics
- 🌙 Dark mode
- 📱 Improved mobile experience
- 🗄️ Replace JSON Server with a production database

---

## 👨‍💻 Developer

### Fahim Muntasir Rahat

**Aspiring Frontend Developer**

Currently learning and building with:

- React
- TypeScript
- Next.js
- Tailwind CSS
- Modern Web Development

### Connect With Me

- 🌐 [Live Project](https://book-vibe-six-delta.vercel.app/)
- 💻 [GitHub](https://github.com/fahimrahat58)
- 💼 [LinkedIn](https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/)

---

## 📄 License

This project was created for learning, portfolio, and educational purposes.

---

<p align="center">
  Made with ❤️ using Next.js, TypeScript & Tailwind CSS
</p>
