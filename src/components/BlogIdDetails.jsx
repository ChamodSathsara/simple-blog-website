"use client";
import { blogItems } from "@/assest/assest";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function BlogIdDetails({ blogid }) {
  const [data, setData] = useState();

  useEffect(() => {
    const foundBlog = blogItems.find((item) => item.id === parseInt(blogid));
    if (foundBlog) {
      setData(foundBlog);
    }
  }, [blogid]);

  if (!data) {
    return <p>Loading...</p>; // ✅ Prevents accessing `undefined` data
  }
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <div className="mt-[-100px] space-y-10">
        <h1 className="text-3xl text-center font-bold uppercase ">
          {data.title}
        </h1>
        <Image src={data.image} width={600} height={600} alt="blog image" />
      </div>

      <p>{data.description}</p>
    </div>
  );
}

export default BlogIdDetails;
