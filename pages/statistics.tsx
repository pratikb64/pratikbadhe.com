import { Layout } from '@components';
import React, { useState } from 'react';

const Statistics = () => {
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  let seo = {
    title: 'Statistics',
    description: 'CONFIG.DESCRIPTION',
    image: 'CONFIG.IMAGE',
    path: '/statistics',
  };

  let finalDate = new Date(2023, 0, 1);

  setInterval(() => {
    let now = new Date().getTime();
    let final = finalDate.getTime();
    let diff = final - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    setDate({
      days,
      hours,
      minutes,
      seconds,
    });
  }, 1000);

  return (
    <Layout seo={seo}>
      <div className="flex h-screen justify-center">
        <div className="mt-[20vh] flex flex-col text-center">
          <div className="text-xl">Statistics revealing in</div>
          <div className="mt-4 flex">
            <div className="mx-3 text-4xl">
              {date.days}
              <span className="text-lg text-primary"> D</span>
            </div>
            <div className="mx-3 text-4xl">
              {date.hours}
              <span className="text-lg text-primary"> H</span>
            </div>
            <div className="mx-3 text-4xl">
              {date.minutes}
              <span className="text-lg text-primary"> M</span>
            </div>
            <div className="mx-3 text-4xl">
              {date.seconds}
              <span className="text-lg text-primary"> S</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
