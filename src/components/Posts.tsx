import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SanityClient from '../client';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([] as any[]);

  useEffect(() => {
    // Not sure yet how I feel about Groq
    SanityClient.fetch(`
      *[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{_id, url}
        }
      }
    `)
      .then((data: any) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="relative pt-16 pb-20 px-4 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Sanity Blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Built using Sanity.io, Vite.js, React, and TailwindUI
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {allPosts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-sm shadow-sm overflow-hidden">
                <div className="flex-shrink-0">
                  {post.mainImage
                    ? <img src={post.mainImage.asset.url} alt="" className="h-48 w-full object-cover" />
                    : <img src="https://www.placecage.com/1080/640" alt="" className="h-48 w-full object-cover" />
                  }
                </div>

              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
