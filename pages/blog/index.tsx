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
      <div>Blogs</div>
    </Layout>
  );
};

export default Blogs;
