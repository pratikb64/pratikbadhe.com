import React from 'react';

const Badge = ({ text }: { text: string }) => {
  return (
    <div className=" font-space-grotesk w-max rounded-md bg-primary/30  p-1 text-[12px]">
      {text}
    </div>
  );
};

export default Badge;
