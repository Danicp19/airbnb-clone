import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Resources from './Resources';


const Footer = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log("togle")
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200 z-50 ">
      <div className="pr-20 pl-20 ">

        <div className=" flex flex-col items-center justify-between py-5 text-sm text-gray-400  border-gray-200 lg:py-6 lg:flex-row">
          <div className="flex flex-col items-center order-last lg:flex-row lg:order-none">
            <span className=" mr-0 text-center lg:mr-4">© 2022 Airbnb, Inc.</span>
        
            <ul className="flex space-x-2 list-disc list-none">
              <span >·</span>
              <li className="hover:underline ">
                <Link href="/">
                  <a>Privacy</a>
                </Link>
              </li>
              <span>·</span>
              <li className="hover:underline">
                <Link href="/">
                  <a>Terms</a>
                </Link>
              </li>
              <span>·</span>
              <li className="hover:underline">
                <Link href="/">
                  <a>Sitemap</a>
                </Link>
              </li>
              <span>·</span>
              <li className="hover:underline">
                <Link href="/">
                  <a>Destinations</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-4 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:mb-0">
            <ul className="flex items-center space-x-4 font-medium">
              <li>
                <Link href="/">
                  <a className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>

                    <span className="hover:underline">English (US)</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="flex items-center">
                    <span className="mr-1">$</span>
                    <span className="hover:underline">USD</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="flex items-center" onClick={handleToggle}  >

                    <span className="hover:underline"  >
                      Support & resources
                    </span>
                    <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className=" ml-2 w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {toggle && <Resources />}
    </footer>
  );
};

export default Footer;