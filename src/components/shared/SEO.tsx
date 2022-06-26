import Head from 'next/head';
import React from 'react';
import CONFIG from '../../utils/siteConfig';

interface SEO {
  title: string;
  image: string;
  path: string;
  desc: string;
}

const SEO: React.FC<SEO> = ({ title, image, path, desc }) => {
  const URL = `${CONFIG.BASE_URL}/${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
