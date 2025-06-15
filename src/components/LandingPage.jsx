import { Layers, Pencil, SquarePen, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="w-full">
      <section className="flex justify-center h-[50vh] sm:h-[70vh] w-full min-h-screen">
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Manage your content
            </h1>
            <p className="text-gray-400 max-w-[700px] mx-auto pt-2">
              Streamline your content workflow, publish with confidence
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant={"default"}
              className="bg-gray-200 w-28 hover:cursor-pointer delay-100"
            >
              <Link href={"/sign-in"}>Try it out!</Link>
            </Button>
            <Button variant={"outline"} className="w-28 hover:cursor-pointer">
              Try it out!
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 px-4">
          <span className="flex flex-col items-center gap-2">
            <SquarePen size={50} />

            <h3 className="text-xl font-bold text-gray-100">
              Intuitive Editor
            </h3>
            <p className="text-gray-400 text-center w-[70%]">
              Create and edit content with user friendly interface.
            </p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Layers size={50} />

            <h3 className="text-xl font-bold text-gray-100">Flexible tools</h3>
            <p className="text-gray-400 text-center w-[70%]">
              Create and edit content with user friendly interface.
            </p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Zap size={50} />

            <h3 className="text-xl font-bold text-gray-100">Blazing Fast</h3>
            <p className="text-gray-400 text-center w-[70%]">
              Create and edit content with user friendly interface.
            </p>
          </span>
        </div>
      </section>
      <section className="flex flex-col h-[60vh] sm:h-[50vh] w-full justify-center items-start">
        <div className="max-w-[50%] mx-auto space-y-3">
          <h4 className="font-bold text-2xl">
            Ready to transform your Content Journey?
          </h4>
          <p className="text-sm text-gray-400">
            Join Thousands of content creators like you who choose CMSly
          </p>
          <div className="flex gap-2">
            <input
              className="bg-zinc-800 focus:outline-none rounded-md text-sm px-2 py-[7px] text-gray-400"
              type="text"
              placeholder="Enter your email"
            />
            <Button variant={"outline"}>Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default LandingPage;
