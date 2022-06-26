import type { NextPage } from 'next';
import { Hero, Layout, Technologies } from '@components';
import CONFIG from 'src/utils/siteConfig';
import { useEffect } from 'react';

const Home: NextPage = () => {
  let seo = {
    title: CONFIG.NAME,
    description: CONFIG.DESCRIPTION,
    image: CONFIG.IMAGE,
    path: CONFIG.BASE_URL,
  };
  return (
    <Layout seo={seo}>
      <Hero />
      <Technologies />
    </Layout>
  );
};

export default Home;
