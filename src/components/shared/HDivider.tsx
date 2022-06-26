import React from 'react';

interface HDivider {
  height?: number;
  diameter?: number;
}

/**
 *
 *
 * @param {*} height - default is 90
 * @param {*} diameter - default is 12
 * @return {*}
 */
const HDivider = ({ height = 90, diameter = 12 }) => {
  return (
    <div className="relative">
      <div className="w-[2px] rounded-full bg-white" style={{ height }}></div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-white"
        style={{ width: diameter, height: diameter }}
      ></div>
    </div>
  );
};

export default HDivider;
