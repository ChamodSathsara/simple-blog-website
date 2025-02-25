import BlogItem from "@/components/BlogItem";
import BlogList from "@/components/BlogList";
import Header from "@/components/Header";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      {/* <BlogItem /> */}
      <BlogList />
    </div>
  );
}

export default Home;
