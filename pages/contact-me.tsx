import { Layout } from '@components';
import React from 'react';

const ContactMe = () => {
  let seo = {
    title: "Let's Connect",
    description: 'CONFIG.DESCRIPTION',
    image: 'CONFIG.IMAGE',
    path: '/contact-me',
  };
  return (
    <Layout seo={seo}>
      <div>Let&apos;s Connect</div>
    </Layout>
  );
};

export default ContactMe;
