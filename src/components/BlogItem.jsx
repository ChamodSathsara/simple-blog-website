import Image from "next/image";
import React from "react";
import { blogItems } from "@/assest/assest";
import Link from "next/link";

function BlogItem({ image, catogary, id, title, description }) {
  return (
    <div
      key={id}
      className="bg-slate-100 flex flex-col justify-center items-start gap-6 ms-4 max-w-[340px] h-auto border border-black p-5 hover:shadow-[-7px_7px_0px_#000000]"
    >
      <Link href={`/blogs/${id}`}>
        <Image src={image} width={400} height={400} alt="blog image" />
      </Link>
      <p className="bg-black text-white px-3">{catogary}</p>
      <div className="space-y-2">
        <p className="font-bold">{title}</p>
        <p className="text-start text-slate-500">{description}</p>
      </div>
      <button className="border border-black px-3 py-1 hover:bg-black hover:text-white ">
        <Link href={`/blogs/${id}`}>Sea More</Link>
      </button>
    </div>
  );
}

export default BlogItem;
