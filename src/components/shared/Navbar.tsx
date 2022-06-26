import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Burger } from '@mantine/core';
import { Img } from '@components';

const Navbar = () => {
  const { asPath } = useRouter();
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'About Me',
      href: '/about-me',
    },
    {
      name: `Let's Connect`,
      href: '/contact-me',
    },
  ];

  return (
    <div className="m-auto max-w-7xl p-2 md:pt-6">
      <nav>
        <div className="flex items-center justify-between">
          <Link href="/">
            <a>
              <Img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src="/images/logo.png"
                alt="logo"
              />
            </a>
          </Link>
          <div className="hidden font-bold sm:flex">
            {navLinks.map((link, index) => (
              <Link href={link.href} key={index}>
                <a
                  className={`px-4 transition-colors duration-300 hover:text-gray-400 ${
                    asPath == link.href
                      ? 'text-gray-100 hover:text-gray-100'
                      : 'text-gray-500'
                  } `}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="z-10 sm:hidden">
            <Burger
              className="z-10"
              color="white"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              size={20}
            />
            <div
              className={`absolute top-0 left-0 h-full w-full bg-secondary-black p-2 transition-all duration-[1400ms] ${
                opened ? 'nav_active' : 'nav_inactive'
              }`}
            >
              <div className="flex flex-col items-end">
                <Burger
                  className="z-10 mt-[2px]"
                  color="white"
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  title={title}
                  size={20}
                />
              </div>
              <div className="flex flex-col text-center">
                {navLinks.map((link, index) => (
                  <Link href={link.href} key={index} passHref>
                    <a className="p-2 text-lg transition-colors duration-300 hover:text-gray-400">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
