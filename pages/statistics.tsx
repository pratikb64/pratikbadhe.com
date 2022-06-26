import { Layout } from '@components';
import React from 'react';

const Statistics = () => {
  let seo = {
    title: 'Statistics',
    description: 'CONFIG.DESCRIPTION',
    image: 'CONFIG.IMAGE',
    path: '/statistics',
  };
  return (
    <Layout seo={seo}>
      <div>Statistics</div>
    </Layout>
  );
};

export default Statistics;
