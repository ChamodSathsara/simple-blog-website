import BlogIdDetails from "@/components/BlogIdDetails";
import Link from "next/link";
import React from "react";

async function Page({ params }) {
  const blogId = (await params).blogId;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-row justify-between items-center py-16 pb-36 px-28 bg-slate-200">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">MyBlog</h1>
        </Link>
        <button className="bg-slate-400 px-3 py-2 shadow-[-7px_7px_0px_#000000]">
          Get Started
        </button>
      </div>
      <div className="">
        <BlogIdDetails blogid={blogId} />
      </div>
    </div>
  );
}

export default Page;
