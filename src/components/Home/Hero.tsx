import React from 'react';
import { HDivider, Img } from '@components';
import CONFIG from 'src/utils/siteConfig';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center pt-[18vh] text-center md:mt-12 md:h-auto md:p-0">
      <span className="text-lg font-light">Hi, my name is</span>
      <h1 className="my-5 text-5xl font-extrabold text-primary md:text-6xl">
        Pratik Badhe
      </h1>
      <div className="max-w-[340px] text-lg font-light">
        I’m <span className="font-extrabold"> Full Stack Web Developer</span>{' '}
        who loves to make ingenious ideas come to life
      </div>
      <div className="my-3 md:my-8">
        <HDivider />
      </div>
      <div className="flex">
        <Link href={CONFIG.GITHUB}>
          <a target="_blank">
            <Img
              className="mx-3 h-7 w-7"
              alt="github-logo"
              src="/vectors/github.svg"
            />
          </a>
        </Link>
        <Link href={CONFIG.TWITTER}>
          <a target="_blank">
            <Img
              className="mx-3 h-7 w-7"
              alt="twitter-logo"
              src="/vectors/twitter.svg"
            />
          </a>
        </Link>
        <Link href={CONFIG.LINKEDIN}>
          <a target="_blank">
            <Img
              className="mx-3 h-7 w-7"
              alt="linkedin-logo"
              src="/vectors/linkedin.svg"
            />
          </a>
        </Link>
        <Link href={'mailto:' + CONFIG.EMAIL}>
          <a>
            <Img
              className="mx-3 h-7 w-7"
              alt="mail-logo"
              src="/vectors/mail.svg"
            />
          </a>
        </Link>
      </div>
      <div className="my-24 ">
        <Img
          className="h-10 w-10 animate-bounce"
          alt="scroll-icon"
          src="/vectors/scroll.svg"
        />
      </div>
    </div>
  );
};

export default Hero;
