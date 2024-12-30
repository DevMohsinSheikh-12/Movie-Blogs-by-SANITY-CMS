

import React from 'react'

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CardContainer } from '@/components/ui/3d-card';
import { client, urlFor } from '../lib/sanity';
import { simpleBlogCard } from '../lib/interface';





export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) [12..23] {
  title,
  smalldescription,
  "currentSlug": slug.current,
  titleImage
}
`;

  const data = await client.fetch(query);

  return data;
}

export default async function Cards() {
  const data: simpleBlogCard[] = await getData();



  return (
    
    // herosection

    <>
      <div id='Cards' className='scroll-smooth Cards grid md:grid-cols-2 lg:grid-cols-4 px-7 items-center justify-center grid-cols-1 my-8'>
        {data.map((post) => (
          <div key={post.currentSlug}> {/* Use currentSlug as the unique key */}
            <CardContainer className="inter-var flex flex-col gap-x-5 items-center justify-center shadow-lg shadow-slate-900 dark:shadow-slate-700 rounded-lg ">
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                height={300}
                width={300}
                className='rounded-lg flex items-center justify-center'
              />
            </CardContainer>

            <h3 className='text-xl font-semibold text-center mt-9'>{post.title}</h3>
            <h3 className='line-clamp-1 text-sm mt-3 text-gray-600 dark:text-gray-300 px-8'>{post.smalldescription}</h3>

            <Button asChild className='ml-8 mt-7'>
              <Link href={`/blog/${post.currentSlug}`}>
                Read More
              </Link>
            </Button>
          </div>
        ))}
      




      </div>
      
      </>
  )
}
 
