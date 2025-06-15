import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ title, exerpt, image, url }) => {
  return (
    <div className="bg-gray-600/20 rounded-lg border flex flex-col p-1 gap-1 hover:scale-[1.03] transition-all delay-100 duration-300">
      <Image
        src={image}
        alt={title}
        className="w-full rounded-md"
        width={300}
        height={170}
      />
      <h2 className="text-xl font-bold text-gray-200">{title}</h2>
      <p className="text-sm text-gray-400">{exerpt}</p>
      <Link
        className="bg-zinc-600/70 py-2 px-3 rounded w-fit"
        href={`/blog${url}`}
      >
        Read More
      </Link>
    </div>
  );
};
export default BlogCard;
