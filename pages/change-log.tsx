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
      <div>ChangeLog</div>
    </Layout>
  );
};

export default ChangeLog;
