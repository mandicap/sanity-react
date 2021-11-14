import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SanityClient from '../../client';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([] as any[]);

  useEffect(() => {
    // Not sure yet how I feel about Groq
    SanityClient.fetch(`
      *[_type == "post"]{
        _id,
        title,
        slug,
        author->,
        categories[]->,
        mainImage{
          asset->{_id, url}
        }
      }
    `)
      .then((data: any) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <Helmet>
        <title>Blog</title>
      </Helmet>

      {allPosts.map((post) => (
        <div key={post.title} className="flex flex-col rounded-sm shadow-sm overflow-hidden">
            <div className="flex-shrink-0">
              <img src={post.mainImage
                  ? post.mainImage.asset.url
                  : 'https://www.placecage.com/1080/640'} alt="" className="h-48 w-full object-cover" />
            </div>

          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="space-x-2 text-sm font-medium">
                {post.categories.map((category: any) => (
                  <Link to={'/blog/category/' + category.slug.current} key={category.slug.current} className="no-underline">
                    {category.title}
                  </Link>
                ))}
              </p>
              <Link to={'/blog/' + post.slug.current} key={post.slug.current} className="block mt-2 no-underline">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
