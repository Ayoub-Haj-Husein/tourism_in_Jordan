// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";


// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blogPost, setBlogPost] = useState(null);
//   useEffect(() => {
//     axios.get(`http://localhost:5000/blog/${id}`)
//       .then((response) => {
//         setBlogPost(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   if (!blogPost) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='flex flex-row	flex-wrap content-center	justify-around '>
//       {blogPost.map((blog) => (
//         <div class="max-w-sm rounded overflow-hidden shadow-lg m-10">
//         <img class="w-full" img={blog.image_url} alt={blog.title}></img>
//         <div class="px-6 py-4">
//           <p class="font-bold text-xl mb-2">{blog.title}</p>
//           <p class="text-gray-700 text-base">{blog.description}</p>
//           <Link to={`/blogsdetails/${blog.blog_id}`}><button>More</button></Link>
//         </div>
//       </div>
//       ))}
//     </div>
  
//   );
// };

// export default BlogDetail;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/blog/${id}`)
      .then((response) => {
        setBlogPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }
  return (
  <div className="flex flex-colum	flex-wrap content-center	justify-around">
    <div className=" max-w p-10 mx-40 mt-20 bg-white border border-[#FE7A00] rounded-lg shadow  dark:border-[#FE7A00] grid grid-cols-2 gap-2">
      <img class="w-full" img={blogPost.image_url} alt={blogPost.title}></img>
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{blogPost.title}</div>
      <p class="text-gray-700 text-base">{blogPost.description}</p>
    </div>
  </div>
  
  );
};

export default BlogDetail;