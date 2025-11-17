import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-6">Posts</h1>

        <PostCard
          title="Sample Post"
          body="This is a placeholder post for setup verification."
        />
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
