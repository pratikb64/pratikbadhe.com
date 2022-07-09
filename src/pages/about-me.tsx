import { Layout } from '@components';
import React from 'react';

const AboutMe = () => {
  let seo = {
    title: 'About Me',
    description: 'CONFIG.DESCRIPTION',
    image: 'CONFIG.IMAGE',
    path: '/about-me',
  };
  return (
    <Layout seo={seo}>
      <div className="flex h-screen items-center justify-center">
        <div>🚧 WIP</div>
      </div>
    </Layout>
  );
};

export default AboutMe;
