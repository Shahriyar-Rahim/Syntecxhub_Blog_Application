import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../components/Loading";


const BlogDetails = () => {

  const {id} = useParams();

  const [blog, setBlog] = useState(null);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://syntecxhub-blog-application-3y4c.vercel.app/blogs/${id}`);
        setBlog(response.data.blog);
        setIsLoading(false);
      } catch (error) {
        console.log("Error getting single blog", error);
      }
    }
    fetchBlog();
    window.scrollTo(0, 0);
  }, [])

  if(isLoading){
    return <Loading />
  }

  console.log(blog);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">
         {blog?.title}
        </h2>
        <div className=" flex items-center  mb-4">
          <img src={blog.author.image} alt="" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-lg font-medium">{blog?.author?.name}</p>
            <p className="text-gray-500">
              {
                            blog?.date ? <span>{new Date(blog.date).toDateString()}</span> : <span>{new Date(blog.createdAt).toDateString()}</span>
                        }
            </p>
          </div>
        </div>
        <img src={blog?.image} alt="" className="w-full md:h-[580px] rounded-md object-cover mb-4" />
        <div className="space-y-4">
            <p>{blog?.description}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cum, culpa quasi rerum mollitia delectus impedit repellat doloribus officia non quia doloremque inventore consectetur ut dolores et id optio laboriosam! Sapiente sint porro consequuntur explicabo, ipsum eos impedit eum nisi nobis adipisci laborum accusantium placeat aperiam! Velit at, quasi voluptas voluptates voluptatibus inventore magni ipsum eos! Harum tenetur sunt mollitia illum tempore laborum rerum, eius aliquid delectus sed corporis distinctio cum illo laudantium, assumenda modi deleniti ut consequatur? Fugiat ipsam, quas sit nesciunt rerum eaque dicta est necessitatibus rem. Accusantium consequatur quia quam atque laborum officiis, et perferendis placeat voluptatibus iste minus at nesciunt explicabo eveniet assumenda impedit id sunt? Laudantium qui voluptate, velit consectetur eligendi ipsa unde nulla accusamus optio autem iure perspiciatis corrupti earum delectus, asperiores quia alias. Dolorem corrupti incidunt, corporis reiciendis odit aut, et quaerat necessitatibus saepe laborum id ab repellendus soluta temporibus obcaecati nesciunt, quidem molestiae atque fugiat nostrum. Accusamus totam, ducimus dolore officiis, assumenda voluptate tenetur commodi culpa eaque aperiam vero praesentium saepe eos magni inventore. Explicabo incidunt doloremque nulla aut accusamus animi veritatis in dolore repellat hic placeat impedit perferendis beatae adipisci sint corrupti voluptatum praesentium, voluptas atque accusantium, deserunt non! Blanditiis, sit!</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
