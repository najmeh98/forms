import { SignupForm } from "../../components/SignupForm";

export default function Home(): JSX.Element {
  return (
    <main
      className={` mx-auto flex min-h-screen flex-col items-center justify-between p-24   `}
    >
      <SignupForm />
    </main>
  );
}
