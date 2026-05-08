import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/home/Home.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import AddBlog from './pages/blogs/addBlog/AddBlog.jsx';
import ManageBlog from './pages/manageBlog/ManageBlog.jsx';
import UpdateBlog from './pages/manageBlog/UpdateBlog.jsx';
import BlogDetails from './pages/blogs/BlogDetails.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/add-blog' element={<AddBlog />} />
        <Route path='/manage-blog' element={<ManageBlog />} />
        <Route path='/blogs/edit/:id' element={<UpdateBlog />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
        <Route path="/users" element={<div>Users</div>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
