"use client";
import React, { useState } from "react";
import { blogItems } from "@/assest/assest";
import BlogItem from "./BlogItem";

function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="mt-14 mb-10 flex justify-center items-center gap-5">
        <button
          onClick={() => {
            setMenu("All");
            console.log(menu);
          }}
          className={menu === "All" ? `bg-black text-white px-2 py-1` : ""}
        >
          All
        </button>
        <button
          onClick={(e) => {
            setMenu("Technology");
          }}
          className={
            menu === "Technology" ? `bg-black text-white px-2 py-1` : ""
          }
        >
          Technology
        </button>
        <button
          onClick={(e) => {
            setMenu("Startup");
          }}
          className={menu === "Startup" ? `bg-black text-white px-2 py-1` : ""}
        >
          Startup
        </button>
        <button
          onClick={(e) => {
            setMenu("Lifestyle");
          }}
          className={
            menu === "Lifestyle" ? `bg-black text-white px-2 py-1` : ""
          }
        >
          Lifestyle
        </button>
      </div>
      {/* blog item cards */}
      <div className="grid items-center justify-center grid-cols-4 gap-8 mx-10">
        {blogItems
          .filter((item) => (menu === "All" ? true : menu === item.catogary))
          .map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              catogary={item.catogary}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}

export default BlogList;
