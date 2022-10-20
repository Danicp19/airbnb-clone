
import { createClient } from 'pexels';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Explore = () => {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    // 563492ad6f917000010000016d49eca36ca240ae819aa392015c567f
    const client = createClient('563492ad6f91700001000001c4febd854eb44709a422b829e56841ce');
    const query = 'house';

    client.photos.search({ query, per_page: 12 })
      .then(photos => photos)
      .then((photos: any) => setPlaces(photos.photos))


  }, [])
  console.log(places)

  return (

    <div className="grid grid-cols-1 lg:gap-x-1 gap-x-1 gap-y-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">

      {places.map((data) => (
        <Link key={data.id} href="#">
          <a>
            <div className="p-2 duration-300 lg:p-3 gap-y-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl">
              <div className="relative w-full h-96  mb-2 md:h-72 lg:w-70 lg:h-70 sm:h-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7 z-10 absolute top-3 right-3 text-gray-500 text-opacity-50 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <Image
                  src={data.src.medium}
                  alt={data.alt}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={data.src.medium}
                  className="rounded-xl"
                />

              </div>


              <div>
                <h3 className="font-medium leading-5 text-gray-500 text-md ">
                  {data.photographer}
                </h3>
                <h4 className="font-light leading-5 text-gray-300 text-sm " >
                  8,093 kilometers away <br />
                  Nov 26 – Dec 1
                </h4>
                <span className="font-medium leading-7 text-gray-500 text-md ">
                  $224 USD
                </span>
                <span className="font-light leading-5 text-gray-600 text-sm ml-2 " >night</span>

              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Explore
