import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h2>
        Welcome to the wesbite, you can sign up here with this prebuilt clerk
        sign up component
      </h2>
      <SignUp />
    </div>
  );
}
