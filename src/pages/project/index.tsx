import { Layout } from '@components';
import React from 'react';

const Projects = () => {
  let seo = {
    title: 'Projects',
    description: 'CONFIG.DESCRIPTION',
    image: 'CONFIG.IMAGE',
    path: '/project',
  };
  return (
    <Layout seo={seo}>
      <div className="flex h-screen items-center justify-center">
        <div>🚧 WIP</div>
      </div>
    </Layout>
  );
};

export default Projects;
