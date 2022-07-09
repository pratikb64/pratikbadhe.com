import { Layout } from '@components';
import React from 'react';

const ChangeLog = () => {
  let seo = {
    title: 'ChangeLog',
    description: 'CONFIG.DESCRIPTION',
    image: 'CONFIG.IMAGE',
    path: '/change-log',
  };
  return (
    <Layout seo={seo}>
      <div className="flex h-screen items-center justify-center">
        <div>🚧 WIP</div>
      </div>
    </Layout>
  );
};

export default ChangeLog;
