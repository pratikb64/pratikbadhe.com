import React from 'react';
import { Badge } from '@components';

interface Tags {
  name: string;
}

interface BlogItem {
  data: {
    name: string;
    tags: Array<Tags>;
  };
}

const BlogItem: React.FC<BlogItem> = ({ data }) => {
  return (
    <div className="flex max-w-sm">
      <div className="border-l-4 border-primary pl-3">
        <h1 className="text-xl">{data.name}</h1>
        <hr className="my-2 border-gray-800" />
        <div className="flex flex-wrap">
          {data.tags.map((tag, tagIndex) => {
            return (
              <div key={tagIndex} className="m-1">
                <Badge text={tag.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
