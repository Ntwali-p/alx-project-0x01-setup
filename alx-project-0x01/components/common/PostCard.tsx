import React from "react";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4">
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="text-gray-700 mt-2">{body}</p>
    </div>
  );
};

export default PostCard;
