import React from 'react';
import { HDivider, ProjectItem } from '@components';
import { ProjectStatus } from './ProjectItem';

const Projects = () => {
  const projects = [
    {
      name: 'Advance Todo Plus',
      description: `Advance todo list application with REST api access`,
      status: ProjectStatus.LIVE,
      techStack: [
        {
          name: 'mongodb',
          image: '/vectors/mongodb.svg',
        },
        {
          name: 'reactjs',
          image: '/vectors/react.svg',
        },
        {
          name: 'redux',
          image: '/vectors/redux.svg',
        },
        {
          name: 'expressjs',
          image: '/vectors/express.svg',
        },
        {
          name: 'typescript',
          image: '/vectors/typescript.svg',
        },
      ],
    },
  ];

  return (
    <div className="m-auto my-28 max-w-5xl">
      <h2 className="text-center text-3xl font-extralight">
        <span className="font-bold text-primary">Projects</span> Showcase
      </h2>
      <div className="my-8">
        <HDivider height={50} />
      </div>
      <div className="flex flex-wrap justify-around lg:justify-between">
        {projects.map((project, index) => {
          return (
            <div key={index} className="m-10">
              <ProjectItem data={project} number={index + 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
