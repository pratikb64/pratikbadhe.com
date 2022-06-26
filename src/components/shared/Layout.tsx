import React from 'react';
import { Footer, Navbar, SEO } from '@components';

interface Layout {
  children: React.ReactNode;
  seo: {
    title: string;
    description: string;
    image: string;
    path: string;
  };
}

const Layout: React.FC<Layout> = ({ children, seo }) => {
  return (
    <div className="text-gray-100">
      <SEO
        desc={seo.description}
        image={seo.image}
        path={seo.path}
        title={seo.title}
      />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
