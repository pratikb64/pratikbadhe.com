import { Layout } from '@components';
import React from 'react';

const Blogs = () => {
  let seo = {
    title: 'Blogs',
    description: 'CONFIG.DESCRIPTION',
    image: 'CONFIG.IMAGE',
    path: '/blog',
  };
  return (
    <Layout seo={seo}>
      <div className="flex h-screen items-center justify-center">
        <div>🚧 WIP</div>
      </div>
    </Layout>
  );
};

export default Blogs;
