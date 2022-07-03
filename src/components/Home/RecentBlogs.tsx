import React from 'react';
import { HDivider, BlogItem } from '@components';

const RecentBlogs = () => {
  const blogs = [
    {
      name: 'Introduction to web development',
      tags: [
        {
          name: 'Javascript',
        },
        {
          name: 'ExpressJs',
        },
        {
          name: 'ExpressJs',
        },
      ],
    },
    {
      name: 'Introduction to web development',
      tags: [
        {
          name: 'Javascript',
        },
        {
          name: 'ExpressJs',
        },
        {
          name: 'ExpressJs',
        },
      ],
    },
    {
      name: 'Introduction to web development',
      tags: [
        {
          name: 'Javascript',
        },
        {
          name: 'ExpressJs',
        },
        {
          name: 'ExpressJs',
        },
      ],
    },
  ];

  return (
    <div className="m-auto mt-28 max-w-7xl ">
      <h2 className="text-center text-3xl font-extralight">
        <span className="font-bold text-primary">Recent</span> Blogs
      </h2>
      <div className="my-8">
        <HDivider height={50} />
      </div>
      <div className="flex flex-wrap justify-around">
        {blogs.map((blog, blogIndex) => {
          return (
            <div key={blogIndex} className="m-8">
              <BlogItem data={blog} />
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className="mt-4 rounded-md border-2 border-primary bg-primary/30 p-[2px] px-6 text-sm ">
          View all
        </button>
      </div>
    </div>
  );
};

export default RecentBlogs;
