import React from "react";

const ABOUTUS = () => {
    return (
      <section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
      <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
              <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                  <div class="relative lg:max-w-md">
                      <img src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg" alt="aboutimage"
                          class="relative z-10 object-cover w-full rounded h-96"></img>
                      <div
                          class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                          <p class="text-lg font-semibold md:w-72">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  class="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                                  viewBox="0 0 16 16">
                                  <path
                                      d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                  </path>
                              </svg> We have Successfully Provided Over 200 trips!
                          </p>
                      </div>
                  </div>
              </div>
              <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                  <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                      <span class="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                      <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                          About Us
                      </h1>
                  </div>
                  <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Welcome to Tourism, your gateway to unforgettable travel experiences. We are passionate about exploring the world and helping you discover its wonders.

                  At Tourism, we believe that travel is not just about visiting new places; it's about creating lasting memories, fostering connections, and enriching your life with diverse cultures and breathtaking landscapes.

                  Our team of dedicated travel enthusiasts, with years of experience in the industry, is committed to providing you with exceptional travel services. Whether you're a solo adventurer, a couple in search of a romantic getaway, a family on a bonding journey, or a group of friends seeking adventure, we've got you covered.
                  </p>
                  <a href="#"
                      class="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                      Contact us
                  </a>
              </div>
          </div>
      </div>
  </section>
    );
};

export default ABOUTUS;