import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="">
      <div className="w-ful flex flex-row justify-between items-center my-10 mx-20">
        <h1 className="text-3xl font-bold">MyBlog</h1>
        <button className="bg-slate-400 px-3 py-2 shadow-[-7px_7px_0px_#000000]">
          Get Started
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <form className="flex flex-row justify-between items-center border border-solid border-black w-1/4 h-14 shadow-[-7px_7px_0px_#000000]">
          <input
            className=" w-full h-full border border-solid border-black"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="text-center px-6 h-full active:bg-slate-600 ">
            Search
          </button>
        </form>
        {/* latest projects */}
        <h1 className="text-2xl font-bold mt-5">Latest Blogs</h1>
        <p className="max-w-screen-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, suscipit aperiam sequi ea est recusandae nam quas.
          Doloremque pariatur corrupti laborum impedit inventore quae
          accusantium?
        </p>
      </div>
    </div>
  );
}

export default Header;
