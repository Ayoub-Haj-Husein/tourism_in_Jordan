import React, { useState } from 'react';
import axios from 'axios';
import "./ub.css";

function UPLOADBLOG() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handlePost = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // You can implement the functionality for posting the data here.
    // Use the 'title', 'description', and 'image' state values to send data to your API.
    axios.post('http://localhost:5000/add_blog', {
      title,
      description,
      image
    })
      .then((response) => {
        alert('User data posted successfully.');
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Upload Blog</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got something you want to add? Post it here!</p>
          <form action="/add_blog" method="post" enctype="multipart/form-data" className="formblog space-y-4 md:space-y-6" onSubmit={handlePost}>
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Title</label>
              <input
                type="text"
                id="title"
                name='title'
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Blog Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-left">Description</label>
              <textarea
                id="description"
                rows="6"
                name='description'
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Describe it"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5 h-3/6 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default UPLOADBLOG;