import Image from "next/image";
import { SignupForm } from "../../components/SignupForm";
import { Text } from "../../components/HeaderText";

export default function Home() {
  return (
    <main
      className={` mx-auto flex min-h-screen flex-col items-center justify-between p-24   `}
    >
      <div className="w-full max-w-md space-y-8">
        <Text className="bg-clip-text  bg-gradient-to-r from-blue-500 from-10% via-indigo-500 via-30% to-pink-600 to-90% text-transparent flex items-center justify-center w-full  font-semibold text-3xl capitalize ">
          welcome
        </Text>
        <SignupForm />
      </div>
    </main>
  );
}
