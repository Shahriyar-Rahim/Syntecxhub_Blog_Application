```markdown
# meta-blog-app

A modern full-stack blog application built with **React + Vite** on the frontend and **Node.js, Express, MongoDB, and Mongoose** on the backend.  
Designed for creating, managing, and displaying blog posts with a clean UI and modular architecture.

## 🚀 Features

- Full-stack MERN-style architecture  
- Create, read, update, and delete blog posts  
- MongoDB + Mongoose for schema modeling  
- Express.js API with modular routing  
- React components for UI rendering  
- Clean directory structure  
- Fast builds & development using Vite  
- Ready for deployment

## 🧰 Tech Stack

| Layer      | Technologies                                  |
|-----------|-----------------------------------------------|
| Frontend  | React, Vite, JavaScript (ES6+)                |
| Backend   | Node.js, Express.js, MongoDB, Mongoose        |
| Tools     | ESLint, npm                                   |
| Deployment| Vercel / Render / Railway / Netlify (optional)|

## 📂 Project Structure

```

/
├─ backend/                  ← Node.js + Express API
│   ├─ src/
│   │   ├─ controllers/      ← API controllers
│   │   ├─ models/           ← Mongoose schemas
│   │   ├─ routes/           ← API routes
│   │   └─ server.js         ← Main server file
│   ├─ package.json
│   └─ .env
│
├─ frontend/
│   ├─ src/
│   │   ├─ components/       ← UI components
│   │   ├─ pages/            ← Page-level components
│   │   ├─ hooks/
│   │   └─ main.jsx          ← App entry point
│   ├─ public/
│   ├─ package.json
│   └─ vite.config.js
│
├─ README.md
└─ .gitignore

````

*(Note: adjust folder names if your repo uses different structure)*

## 🛠 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Shahriyar-Rahim/meta-blog-app.git
cd meta-blog-app
````

---

# ⚙️ Backend Setup (Node.js + MongoDB)

### 2️⃣ Navigate to backend folder

```bash
cd backend
npm install
```

### 3️⃣ Create a `.env` file

```env
PORT=5000
MONGODB_URI=your-mongodb-connection-string
```

### 4️⃣ Run the backend

```bash
npm run dev
```

---

# 🎨 Frontend Setup (React + Vite)

### 5️⃣ Navigate to frontend

```bash
cd ../frontend
npm install
```

### 6️⃣ Start the frontend dev server

```bash
npm run dev
```

Your app will run on:

* Frontend → `http://localhost:5173`
* Backend → `http://localhost:5000`

---

## 📡 API Endpoints (example)

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| GET    | /blogs     | Get all blogs  |
| POST   | /blogs     | Create a blog  |
| GET    | /blogs/:id | Get blog by ID |
| PUT    | /blogs/:id | Update blog    |
| DELETE | /blogs/:id | Delete blog    |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push & open a PR

---

## 📜 License

This project is licensed under the **MIT License**.

---

**Developed by Shahriyar Rahim**
Full Stack Web Developer & CSE Undergraduate(persuing)

