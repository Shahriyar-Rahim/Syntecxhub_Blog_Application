# 📝 Syntecxhub Blog Application

A **modern, full-stack blog application** built with React, Node.js, Express, and MongoDB. This project demonstrates best practices in full-stack development with a scalable architecture, clean UI, and RESTful API design.

---

## 🎯 Project Overview

Syntecxhub Blog Application is a complete blogging platform that enables users to create, read, update, and delete blog posts. The application features a responsive frontend built with React and Vite, paired with a robust backend API powered by Node.js and Express, all connected to a MongoDB database.

**Perfect for:**
- Learning full-stack development (MERN stack)
- Portfolio projects
- Production-ready blog platform
- Content management system (CMS)

---

## 🚀 Features

✨ **Frontend Features:**
- Modern, responsive UI with React 19
- Fast builds with Vite
- Beautiful styling with Tailwind CSS and DaisyUI
- Smooth animations with Framer Motion
- Form validation with React Hook Form
- Client-side routing with React Router v7
- API integration with Axios
- Icon library with React Icons
- ESLint code quality checks

🔧 **Backend Features:**
- RESTful API with Express.js v5
- MongoDB database with Mongoose ODM
- CORS enabled for cross-origin requests
- Environment variable management
- Development server with hot-reload (Nodemon)
- Clean architecture with separation of concerns
- Error handling middleware

---

## 📊 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | React | 19.2.0 |
| **Frontend Build** | Vite | 7.2.2 |
| **Styling** | Tailwind CSS + DaisyUI | 4.1.17 + 5.5.5 |
| **State Management** | React Hook Form | 7.66.1 |
| **Routing** | React Router | 7.9.6 |
| **HTTP Client** | Axios | 1.13.2 |
| **Animations** | Framer Motion | 12.23.24 |
| **Backend Runtime** | Node.js | Latest LTS |
| **Backend Framework** | Express.js | 5.1.0 |
| **Database** | MongoDB | 7.0.0 |
| **ODM** | Mongoose | 8.20.0 |
| **Dev Tools** | Nodemon, ESLint | 3.1.11, 9.39.1 |

---

## 📂 Project Structure

```
Syntecxhub_Blog_Application/
│
├── backend/                          # Node.js Express API
│   ├── index.js                      # Server entry point
│   ├── package.json                  # Backend dependencies
│   ├── .env                          # Environment variables
│   ├── models/                       # Mongoose schemas
│   ├── routes/                       # API route definitions
│   ├── controllers/                  # Route controllers (business logic)
│   ├── middleware/                   # Express middleware
│   └── README.md                     # Backend documentation
│
├── frontend/                         # React Vite application
│   ├── src/
│   │   ├── main.jsx                 # React entry point
│   │   ├── App.jsx                  # Root component
│   │   ├── components/              # Reusable UI components
│   │   ├── pages/                   # Page-level components
│   │   ├── hooks/                   # Custom React hooks
│   │   └── styles/                  # Global styles
│   ├── public/                      # Static assets
│   ├── vite.config.js               # Vite configuration
│   ├── package.json                 # Frontend dependencies
│   ├── eslint.config.js             # ESLint configuration
│   └── README.md                    # Frontend documentation
│
├── .gitignore                        # Git ignore rules
└── README.md                         # This file

```

---

## 🛠️ Installation & Setup

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas cloud connection)

### Step 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shahriyar-Rahim/Syntecxhub_Blog_Application.git
cd Syntecxhub_Blog_Application
```

### Step 2️⃣ Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with your configuration:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blog_db?retryWrites=true&w=majority
NODE_ENV=development
```

**MongoDB Connection String Options:**
- **Local MongoDB:** `mongodb://localhost:27017/blog_db`
- **MongoDB Atlas:** Get your connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Start the backend server:

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Backend will be available at: `http://localhost:5000`

### Step 3️⃣ Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Frontend will be available at: `http://localhost:5173`

---

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| **GET** | `/blogs` | Fetch all blog posts | - |
| **GET** | `/blogs/:id` | Fetch a specific blog post | - |
| **POST** | `/blogs` | Create a new blog post | `{ title, content, author }` |
| **PUT** | `/blogs/:id` | Update a blog post | `{ title, content, author }` |
| **DELETE** | `/blogs/:id` | Delete a blog post | - |

### Example Requests

**Create a Blog Post:**
```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Blog",
    "content": "This is my first blog post",
    "author": "Shahriyar"
  }'
```

**Get All Blog Posts:**
```bash
curl http://localhost:5000/api/blogs
```

---

## 🗄️ Database Schema

### Blog Post Model

```javascript
{
  _id: ObjectId,
  title: String (required),
  content: String (required),
  author: String,
  createdAt: Date (default: current timestamp),
  updatedAt: Date (default: current timestamp)
}
```

---

## 🎨 Frontend Components & Pages

**Key Components:**
- `BlogList` - Display all blog posts
- `BlogCard` - Individual blog post card
- `BlogDetail` - Full blog post view
- `CreateBlog` - Form to create a new post
- `EditBlog` - Form to edit existing post
- `Navigation` - App navigation bar
- `Footer` - App footer

**Key Pages:**
- `/` - Home page (blog list)
- `/blog/:id` - Blog detail page
- `/create` - Create new blog page
- `/edit/:id` - Edit blog page

---

## 📝 Development Guide

### Running Tests

Currently, there are no automated tests. To add tests:

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd ../frontend
npm test
```

### Code Quality

**Frontend Linting:**
```bash
cd frontend
npm run lint
```

**Build for Production:**
```bash
# Frontend
cd frontend
npm run build

# Frontend preview
npm run preview
```

### Environment Variables

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

**Frontend (if needed):**
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Deployment

### Deploy Backend

**Option 1: Render**
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy with one click

**Option 2: Railway**
1. Create a new project on Railway
2. Connect your GitHub repo
3. Set `MONGODB_URI` and `PORT` in Environment
4. Deploy

**Option 3: Vercel (Backend - Serverless)**
1. Deploy using Vercel CLI or GitHub integration
2. Set environment variables

### Deploy Frontend

**Option 1: Vercel**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Option 3: GitHub Pages**
```bash
npm run build
# Push dist folder to gh-pages branch
```

---

## 🤝 Contributing

We welcome contributions! Here's how to contribute:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/Shahriyar-Rahim/Syntecxhub_Blog_Application.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, well-documented code
   - Follow existing code style
   - Test your changes

4. **Commit Your Changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

---

## 📋 Commit Message Convention

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: code style changes (formatting, etc.)
refactor: refactor code
perf: performance improvements
test: add or update tests
chore: build process, dependencies, etc.
```

---

## 🐛 Known Issues & Roadmap

### Current Limitations
- No user authentication/authorization
- No pagination for blog posts
- No search functionality
- No image upload support

### Future Enhancements 🚧
- [ ] User authentication with JWT
- [ ] Blog post pagination
- [ ] Search and filter functionality
- [ ] Image upload and hosting
- [ ] Comment system
- [ ] Like/bookmark feature
- [ ] User profile management
- [ ] Draft/published status
- [ ] SEO optimization
- [ ] Dark mode theme
- [ ] Email notifications
- [ ] Admin dashboard

---

## 🧪 Testing

To set up testing infrastructure:

**Backend (Jest):**
```bash
cd backend
npm install --save-dev jest supertest
npm test
```

**Frontend (Vitest/Jest):**
```bash
cd frontend
npm install --save-dev vitest @testing-library/react
npm test
```

---

## 📖 Documentation

- **Backend Documentation:** See [backend/README.md](backend/README.md)
- **Frontend Documentation:** See [frontend/README.md](frontend/README.md)

---

## 🔐 Security Notes

⚠️ **Important Security Considerations:**

1. **Environment Variables:** Never commit `.env` files to version control
2. **CORS:** Configure CORS properly for production
3. **Input Validation:** Validate and sanitize all user inputs
4. **Authentication:** Add JWT or OAuth for user authentication
5. **MongoDB:** Use strong connection strings and IP whitelist
6. **Rate Limiting:** Implement rate limiting on API endpoints
7. **HTTPS:** Always use HTTPS in production
8. **Secrets:** Store secrets securely (never in code)

---

## 📞 Support & Contact

If you have questions or need help:

- **GitHub Issues:** [Create an issue](https://github.com/Shahriyar-Rahim/Syntecxhub_Blog_Application/issues)
- **Email:** shahriyar@example.com
- **Portfolio:** [Shahriyar Rahim](https://github.com/Shahriyar-Rahim)

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Shahriyar Rahim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
```

---

## 👨‍💻 About the Author

**Shahriyar Rahim**
- CSE Undergraduate (Pursuing)
- Full Stack Web Developer
- Passionate about building scalable web applications
- GitHub: [@Shahriyar-Rahim](https://github.com/Shahriyar-Rahim)

---

## 🎓 Learning Resources

### Useful Resources for Understanding This Project

- **React Documentation:** https://react.dev
- **Node.js & Express:** https://expressjs.com
- **MongoDB Guide:** https://docs.mongodb.com
- **Mongoose Documentation:** https://mongoosejs.com
- **Vite Guide:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **REST API Best Practices:** https://restfulapi.net

---

## ⭐ Show Your Support

If you found this project helpful, please give it a star! ⭐

---

**Last Updated:** May 8, 2026

**Repository:** https://github.com/Shahriyar-Rahim/Syntecxhub_Blog_Application
