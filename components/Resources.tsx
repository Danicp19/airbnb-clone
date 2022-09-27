import React, { useState, useEffect } from "react";
import Link from 'next/link';
const INFO = [
  {
    title: 'Support',
    data: [
      'Help Center',
      'AirCover',
      'Safety information',
      'Supporting people with disabilities',
      'Cancellation options',
      'Our COVID-19 Response',
      'Report a neighborhood concern',
    ],
  },
  {
    title: 'Community',
    data: [
      'Airbnb.org: disaster relief housing',
      'Support Afghan refugees',
      'Combating discrimination',
    ],
  },
  {
    title: 'Hosting',
    data: [
      'Try hosting',
      'AirCover for Hosts',
      'Explore hosting resources',
      'Visit our community forum',
      'How to host responsibly',
    ],
  },
  {
    title: 'Airbnb',
    data: [
      'Newsroom',
      'Learn about new features',
      'Letter from our founders',
      'Careers',
      'Investors',
      'Gift cards',
    ],
  },
];

const Resources = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
    console.log("close")
  };
  return (
    // transform translate-x--2/4  translate-y--2/4 
    <div>
      {!close ? (
        <div className=" flex justify-center  "  >
          <div className=" fixed bottom-0  bg-white w-full ">
            <div className="flex " >
              <button className=" flex justify-start m-8" onClick={handleClose}>
                X
              </button>
              <div className=" grid grid-cols-1 lg:grid-cols-4">

                {INFO.map(({ title, data }, index) => (
                  <div
                    key={title}
                    className={`${index !== 0 && 'border-t border-gray-200 lg:border-none'
                      } py-6 md:py-8`}
                  >
                    <span className="inline-block mb-4 text-sm font-medium">{title}</span>
                    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-y-3 xl:gap-y-4">
                      {data.map((data) => (
                        <li
                          key={data}
                          className="text-sm text-gray-500 hover:text-gray-400 hover:underline"
                        >
                          <Link href="/">
                            <a>{data}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>) : null}
    </div>
  );
};

export default Resources;