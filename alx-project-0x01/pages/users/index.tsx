import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-6">Users</h1>
        <p>This is the users page placeholder.</p>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
