import React from 'react';
import { Img } from '@components';

interface TechStack {
  name: string;
  image: string;
}

export enum ProjectStatus {
  LIVE = 'LIVE',
  WIP = 'WIP',
}

interface ProjectItem {
  number: number;
  data: {
    name: string;
    description: string;
    techStack: Array<TechStack>;
    status: ProjectStatus;
  };
}

const ProjectItem: React.FC<ProjectItem> = ({ data, number }) => {
  const projectStatus = {
    LIVE: <StatusTag status={'LIVE'} color="bg-green-600" />,
    WIP: <StatusTag status={'WIP'} color="bg-yellow-600" />,
  };

  return (
    <div className="flex max-w-sm">
      <div className="mr-2 text-center font-space-grotesk text-4xl font-bold text-primary">
        <span>{number}.</span>
        <div>{projectStatus[data.status]}</div>
      </div>
      <div>
        <h1 className="text-3xl">{data.name}</h1>
        <div className="my-2 font-space-grotesk text-sm text-gray-400 ">
          {data.description}
        </div>
        <hr className="my-2 border-gray-700 " />
        <div className="flex flex-wrap justify-between">
          {data.techStack.map((tech, techIndex) => {
            return (
              <div key={techIndex}>
                <Img className="m-2 h-8 w-8" alt={tech.name} src={tech.image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface StatusTag {
  status: string;
  color: string;
}

const StatusTag: React.FC<StatusTag> = ({ status, color }) => {
  return (
    <div
      className={`mt-2 rounded-full px-1 text-center font-outfit text-sm text-black ${color}`}
    >
      {status}
    </div>
  );
};

export default ProjectItem;
