import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://syntecxhub-blog-application-3y4c.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching blog data: " + error));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`https://syntecxhub-blog-application-3y4c.vercel.app/blogs/${id}`);
        setBlogs(blogs.filter((blog) => blog._id !== id));

        alert("Blog deleted successfully");
      } catch (error) {
        console.log("Error deleting blog", error);
      }
    }
  };

  return (
    <section className="container max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-2xl font-bold mb-6">Manage Your Blogs</h2>
      <div className="overflow-x-auto">
        {blogs.length > 0 ? (
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="">
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Title
                  </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Author Name
                  </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Date
                  </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm  font-semibold">
                      <span>{index + 1}. </span>
                      {blog.title}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm ">{blog.author.name}</p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm ">
                      {blog?.date ? (
                        <span>{new Date(blog.date).toDateString()}</span>
                      ) : (
                        <span>{new Date(blog.createdAt).toDateString()}</span>
                      )}
                    </p>
                  </td>
                  <td className="p-4 text-sm border-b border-slate-700 space-x-2 ">
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-500"
                    >
                      View
                    </Link>
                    <Link
                      to={`/blogs/edit/${blog._id}`}
                      className="bg-yellow-500 text-white px-2 py-1 hover:bg-yellow-800"
                    >
                      Edit
                    </Link>
                    <Link className="bg-red-500 text-white px-2 py-1 hover:bg-red-800">
                      <button
                        onClick={() => {
                          handleDelete(blog?._id);
                        }}
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No DATA found!!!</div>
        )}
      </div>
    </section>
  );
};

export default ManageBlog;
