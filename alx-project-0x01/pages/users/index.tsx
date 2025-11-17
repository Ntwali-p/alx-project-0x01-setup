import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-6">Users</h1>
        <p>This is the users page.</p>
      </main>
    </div>
  );
};

export default UsersPage;
