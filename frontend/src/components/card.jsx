import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='flex flex-row	flex-wrap content-center	justify-around '>
      {data.map((blog) => (
        <div key={blog.blog_id} class="max-w-sm rounded overflow-hidden shadow-lg m-10">
        <img class="w-full" img={blog.image_url} alt={blog.title}></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{blog.title}</div>
          <p class="text-gray-700 text-base">{blog.description}</p>
          <Link to={`/blogsdetails/${blog.blog_id}`}><button>More</button></Link>
        </div>
      </div>
      ))}
    </div>

  );
}

export default Card;
