import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="py-16">
      <div className="container flex justify-center">
        <SignIn />
      </div>
    </section>
  );
}
