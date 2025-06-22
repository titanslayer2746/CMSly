"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const { register, handleSubmit } = useForm();
  const [content, setContent] = useState("");
  const handleForm = () => {};
  return (
    <section>
      <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
        <input
          {...register("title")}
          placeholder="Enter the post title"
          type="text"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
        />
        <ReactQuill value={content} onChange={setContent} />
        <input
          {...register("keywords")}
          placeholder="Enter Keywords"
          type="text"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
        />
        <button
          type="submit"
          className="bg-zinc-800 px-3 py-2 rounded cursor-pointer"
        >
          Save
        </button>
      </form>
    </section>
  );
}
