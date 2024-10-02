import { currentUser } from "@clerk/nextjs/server";

const ServerProtectedPage = async () => {
  const user = await currentUser();

  return (
    <section className="py-14">
      <div className="container">
        <h1 className="mb-4 text-3xl font-bold">Protected Server-side Page</h1>
        
        <p>Hello, {user?.firstName || user?.emailAddresses[0].emailAddress}.</p>
      </div>
    </section>
  );
};

export default ServerProtectedPage;
