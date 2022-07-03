import React from 'react';
import { HDivider, Img } from '@components';

const Technologies = () => {
  const technologies = [
    {
      name: 'react',
      url: 'https://reactjs.org/',
      image: '/vectors/react.svg',
    },
    {
      name: 'strapi',
      url: 'https://strapi.io/',
      image: '/vectors/strapi.svg',
    },
    {
      name: 'typescript',
      url: 'https://www.typescriptlang.org/',
      image: '/vectors/typescript.svg',
    },
    {
      name: 'tailwindcss',
      url: 'https://tailwindcss.com/',
      image: '/vectors/tailwindcss.svg',
    },
    {
      name: 'postgresql',
      url: 'https://www.postgresql.org/',
      image: '/vectors/postgresql.svg',
    },
    {
      name: 'nextjs',
      url: 'https://nextjs.org/',
      image: '/vectors/nextdotjs.svg',
    },
    {
      name: 'nodejs',
      url: 'https://nodejs.org/',
      image: '/vectors/nodedotjs.svg',
    },
    {
      name: 'koa',
      url: 'https://koajs.com/',
      image: '/vectors/koa.svg',
    },
    {
      name: 'expressjs',
      url: 'https://expressjs.com/',
      image: '/vectors/express.svg',
    },
    {
      name: 'postman',
      url: 'https://www.postman.com/',
      image: '/vectors/postman.svg',
    },
    {
      name: 'aws',
      url: 'https://aws.amazon.com/',
      image: '/vectors/amazonaws.svg',
    },
    {
      name: 'stripe',
      url: 'https://stripe.com/',
      image: '/vectors/stripe.svg',
    },
    {
      name: 'redux',
      url: 'https://redux.js.org/',
      image: '/vectors/redux.svg',
    },
    {
      name: 'mongodb',
      url: 'https://www.mongodb.com/',
      image: '/vectors/mongodb.svg',
    },
    {
      name: 'cloudflare',
      url: 'https://www.cloudflare.com/',
      image: '/vectors/cloudflare.svg',
    },
    {
      name: 'git',
      url: 'https://git-scm.com/',
      image: '/vectors/git.svg',
    },
    {
      name: 'framer-motion',
      url: 'https://www.framer.com/motion/',
      image: '/vectors/framer.svg',
    },
    {
      name: 'firebase',
      url: 'https://firebase.google.com/',
      image: '/vectors/firebase.svg',
    },
    {
      name: 'figma',
      url: 'https://www.figma.com/',
      image: '/vectors/figma.svg',
    },
    {
      name: 'mdx',
      url: 'https://mdxjs.com/',
      image: '/vectors/mdx.svg',
    },
    {
      name: 'heroku',
      url: 'https://www.heroku.com/',
      image: '/vectors/heroku.svg',
    },
    {
      name: 'nginx',
      url: 'https://www.nginx.com/',
      image: '/vectors/nginx.svg',
    },
    {
      name: 'prisma',
      url: 'https://www.prisma.io/',
      image: '/vectors/prisma.svg',
    },
    {
      name: 'gatsby',
      url: 'https://www.gatsbyjs.com/',
      image: '/vectors/gatsby.svg',
    },
    {
      name: 'hasura',
      url: 'https://hasura.io/',
      image: '/vectors/hasura.svg',
    },
    {
      name: 'razorpay',
      url: 'https://razorpay.com/',
      image: '/vectors/razorpay.svg',
    },
  ];

  return (
    <div className=" my-4 flex flex-col items-center">
      <h2 className="text-center text-3xl font-extralight">
        <span className="font-bold text-primary">Technologies</span> I Have
        Worked With
      </h2>
      <div className="my-8">
        <HDivider height={50} />
      </div>
      <div className="mt-10 flex w-[97vw] grid-flow-col grid-rows-4 flex-wrap justify-center gap-12 overflow-x-auto md:grid-rows-3 lg:grid lg:w-[90vw] lg:overflow-x-auto  xl:w-auto xl:grid-rows-2">
        {technologies.map((tech, index) => {
          return (
            <div className="" key={index}>
              <a href={tech.url} target="_blank" rel="noreferrer">
                <Img
                  className="h-10 w-10 md:h-12  md:w-12"
                  alt={tech.name}
                  src={tech.image}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
