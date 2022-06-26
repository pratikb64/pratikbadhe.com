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
      <div>Projects</div>
    </Layout>
  );
};

export default Projects;
