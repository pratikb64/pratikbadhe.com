import React from 'react';
import { HDivider } from '@components';

const Technologies = () => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <h2 className="text-center text-3xl font-extralight">
        <span className="font-bold text-primary">Technologies</span> I Have
        Worked With
      </h2>
      <div className="my-8">
        <HDivider height={50} />
      </div>
    </div>
  );
};

export default Technologies;
