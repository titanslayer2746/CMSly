"use client";
import { Crosshair } from "lucide-react";
import Google from "./logo/Google";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const onSignin = async () => {
    try {
      setLoading(true);
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error(error.message);
      toast("Failed to sign in");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-full sm:w-1/2 md:w-1/3 mx-4 p-4 rounded-lg bg-zinc-800 flex flex-col items-center gap-4">
        <Crosshair className="size-16 text-gray-300" />
        <p className="text-sm text-gray-200">
          Sign in to manage your posts, track engagement, and keep your content
          fresh and impactful.
        </p>
        <button
          onClick={onSignin}
          className="flex gap-2 items-center bg-gray-500/50 rounded font-bold text-lg px-5 py-1 hover:cursor-pointer hover:bg-gray-500/40 transition-colors duration-200"
        >
          <Google className="size-8" />
          {!loading ? "Sign in" : "loading..."}
        </button>
      </div>
    </section>
  );
};
export default SignInPage;
