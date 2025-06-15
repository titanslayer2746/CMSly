import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

const page = () => {
  const tags = ["space", "tech", "science", "sports", "Nasa", "React"];
  return (
    <section>
      <div className="flex flex-col gap-4 items-center">
        <Image
          className="rounded border w-[90%] md:w-[700px]"
          src="/thumbnails/react-v-next.png"
          width={500}
          height={250}
          alt={"random title"}
        />
        <h1 className="text-2xl md:text-4xl font-bold">Deep space tech</h1>
        <div className="meta-of-a-blog space-y-2">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex gap-2 items-center">
              <Calendar className="text-gray-400 size-4" />
              <p className="text-gray-400 text-xs">
                Created on: {dateFormat(new Date())}
              </p>
            </div>
          </div>
          <div className="text-xs flex items-center gap-2">
            <p>Category:</p>
            <p className="badge bg-gray-600/30 border border-gray-700 w-fit px-2 py-1 rounded">
              Space Exploration:
            </p>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p>Tags: </p>
            {tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className="badge bg-gray-600/30 border border-gray-700 w-fit px-[4px] py-[2px] rounded"
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        <p className="text-sm w-[90%] md:w-2/3 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          cupiditate illo omnis debitis minima alias temporibus doloribus
          repudiandae assumenda aliquid maxime dolor veniam aliquam ex atque
          ipsum nihil deserunt suscipit consequuntur quasi id sit, ullam
          commodi. Recusandae ullam magni pariatur similique laboriosam ex!
          <br /> Deserunt rem vel iste amet provident similique dolores saepe
          quisquam ab eum debitis perspiciatis at quae repellat reprehenderit
          vitae, eius accusamus sint itaque omnis beatae veritatis incidunt
          praesentium quasi. Quisquam ut, at, repudiandae beatae dolorem aut
          commodi voluptatum ullam ipsa itaque pariatur ab fugiat libero sequi
          expedita. Maiores, ea ad exercitationem quaerat a ipsam vero aut,
          itaque facere consequuntur impedit numquam ipsum voluptatum sint est
          et, culpa cum dolor. Recusandae accusamus modi ut quidem dicta dolor
          sed possimus dolore, earum itaque eum cupiditate hic accusantium ipsum
          aliquam dolorem sunt omnis porro libero tempora! Nostrum labore modi
          aliquid illum quibusdam voluptatum saepe tempore eum
          <br /> maxime. Voluptates laudantium autem cum. Ipsum corporis
          accusantium quasi voluptate commodi. Vel possimus laboriosam vitae
          quas voluptas. Expedita quidem, numquam totam, saepe odio ab tenetur
          magni officiis quibusdam quisquam vel temporibus maxime debitis
          consequatur dolores libero asperiores quo autem porro? Nulla nihil
          error necessitatibus quisquam nobis, facere repellendus aliquam
          itaque? Cupiditate vero saepe provident.
        </p>
      </div>
    </section>
  );
};
export default page;
