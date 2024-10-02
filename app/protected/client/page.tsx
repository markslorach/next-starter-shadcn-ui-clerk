"use client";
import { useUser } from "@clerk/nextjs";

const ClientProtectedPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <section className="py-14">
      <div className="container">
        <h1 className="mb-4 text-3xl font-bold">Protected Client-side Page</h1>
        
        <p>Hello, {user?.firstName || user?.emailAddresses[0].emailAddress}.</p>
      </div>
    </section>
  );
};

export default ClientProtectedPage;
