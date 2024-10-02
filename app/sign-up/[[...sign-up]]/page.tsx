import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="py-16">
      <div className="container flex justify-center">
        <SignUp />
      </div>
    </section>
  );
}
