import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="py-16">
      <div className="container flex justify-center">
        <SignIn />
      </div>
    </section>
  );
}
