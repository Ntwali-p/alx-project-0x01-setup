import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-100 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ALX Project</h1>

      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
