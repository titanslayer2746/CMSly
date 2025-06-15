import { Heading1 } from "lucide-react";
import BlogCard from "./BlogCard";

const blogConfig = [
  {
    title: "Reactjs vs Nextjs",
    exerpt: "Nextjs is the ultimate library on top of react.",
    image: "/thumbnails/react-v-next.png",
    url: "/demo-slug1",
  },
  {
    title: "Dreams to be a remote developer",
    exerpt: "Get a job as a remote developer ...",
    image: "/thumbnails/dreams.png",
    url: "/demo-slug2",
  },
  {
    title: "Backend dev roadmap",
    exerpt: "How to become a backend developer in 2025?",
    image: "/thumbnails/become-backend-dev.png",
    url: "/demo-slug3",
  },
];

const Blogs = () => {
  return (
    <section className="grid gap-3 grid-cols-2 md:grid-cols-3 p-8">
      {blogConfig.map((blog, index) => {
        return (
          <div key={index}>
            <BlogCard
              title={blog.title}
              exerpt={blog.exerpt}
              image={blog.image}
              url={blog.url}
            />
          </div>
        );
      })}
    </section>
  );
};
export default Blogs;
