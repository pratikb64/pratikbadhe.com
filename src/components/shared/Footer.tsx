import React from 'react';
import { Img } from '@components';
import Link from 'next/link';

const Footer = () => {
  const pages = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'About Me',
      path: '/about-me',
    },
    {
      name: 'Let’s Connect',
      path: '/contact-me',
    },
    {
      name: 'Projects Showcase',
      path: '/project',
    },
    {
      name: 'My Statistics',
      path: '/statistics',
    },
    {
      name: 'Change Log',
      path: '/change-log',
    },
  ];

  const links = [
    {
      name: 'Terms and Conditions',
      path: '/terms-and-conditions',
    },
    {
      name: 'Privacy Policy',
      path: '/privacy-policy',
    },
  ];

  return (
    <footer className="bg-secondary-black py-8 md:p-3 md:py-12">
      <div className="m-auto flex max-w-7xl flex-col md:flex-row lg:justify-between">
        <div className="mb-10 flex w-full flex-col items-center md:m-2 md:w-[35%] md:items-start md:justify-between">
          <Link href="/">
            <a>
              <Img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src="/images/logo.png"
                alt="logo"
              />
            </a>
          </Link>
          <div className="font-space-grotesk hidden text-sm font-bold text-accent-black md:block">
            © 2022-present Pratik Badhe. All Rights Reserved.
          </div>
        </div>
        <div className="m-auto flex w-full justify-around md:w-[65%] lg:m-0 lg:w-[48%] ">
          <div>
            <div className="mb-4 font-bold text-accent-black md:mb-6">
              Pages
            </div>
            <div className="grid grid-flow-row gap-2 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-4 sm:gap-x-14">
              {pages.map((page, index) => {
                return (
                  <Link href={page.path} key={index}>
                    <a className=" text-sm md:text-base">{page.name}</a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-4 font-bold text-accent-black md:mb-6">
              Links
            </div>
            <div className="grid  gap-2 sm:gap-4 sm:gap-x-14">
              {links.map((link, index) => {
                return (
                  <Link href={link.path} key={index}>
                    <a className="text-sm md:text-base">{link.name}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="font-space-grotesk mt-10 text-center text-[12px] font-bold  text-accent-black md:hidden">
          © 2022-present Pratik Badhe. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
