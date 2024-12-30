import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { CardContainer } from "@/components/ui/3d-card";
import Cards from "@/app/components/Cards";

// Revalidate every 30 seconds
export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({ params }: any) {
  // Await the params object before accessing its properties
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl">404 - Blog Post Not Found</h1>
      </div>
    );
  }

  // Fetch the data using the slug
  const data: fullBlog | null = await getData(slug);

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl">404 - Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <>
    
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      > 
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-[#1e293b] dark:to-[#4f46e5] dark:opacity-40"
        />
      </div>
      <div className="allhero pt-11 lg:pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center md:px-14 lg:pl-16">
        {/* Text Section */}
        <div className="big-text-and-btns">
          <h1 className="pt-9 font-bold text-[46px] md:text-[56px] text-center dark:text-slate-200">
            {data.title}
          </h1>
          <div className="text-[18px] text-slate-800 dark:text-slate-300 mt-9 px-6 md:px-0">
            <PortableText value={data.content} />
          </div>
          <div className="space-x-3 mt-9 pb-8 flex justify-start pl-6">
            <button className="rounded-[5px] border py-3 px-6 bg-black text-white">
              Watch Trailer
            </button>
            <button className="rounded-[5px] border py-3 px-6 bg-white text-black">
              Watch Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <CardContainer>
            <Image
              src={urlFor(data.titleImage).url()}
              height={430}
              width={430}
              alt={data.title}
              priority
              className="mt-6 rounded-lg shadow-2xl ring-border px-4 md:px-0 md:ring-8 md:ring-gray-400 dark:ring-8 dark:ring-slate-700"
            />
          </CardContainer>
        </div>
      </div>

      {/* Other Movies Section */}
      <div className="my-16">
        <div className="my-9">
          <h1 className="text-4xl md:text-7xl text-center font-bold">
            Other Movies
          </h1>
        </div>
        <Cards />
      </div>
    </>
  );
}
