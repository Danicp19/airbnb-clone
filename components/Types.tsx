import React from 'react'
import tiny from "../icons/tiny.jpeg";
import cabins from "../icons/cabins.jpeg";
import surfing from "../icons/surfing.jpeg";
import caves from "../icons/caves.jpeg";
import shared from "../icons/shared.jpeg";
import OMG from "../icons/OMG.jpeg";
import arctic from "../icons/arctic.jpeg";
import islands from "../icons/islands.jpeg";
import caravans from "../icons/caravans.jpeg";
import domes from "../icons/domes.jpeg";
import frames from "../icons/frames.jpeg";
import design from "../icons/design.jpeg";
import Image from 'next/image';

type Props = {}

const Types = (props: Props) => {
  return (
    <div className=" flex gap-x-14 items-center  pr-5 pl-5   pt-8 pb-7 ">
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">

          <Image src={tiny} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Tiny homes
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={cabins} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2 ">
            Cabins
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={surfing} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Surfing
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={caves} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Caves
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={shared} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Shared homes
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={OMG} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            OMG!
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={arctic} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            The Arctic
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={islands} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Islands
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={caravans} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Caravans
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={domes} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Domes
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={frames} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            A-frames
          </span>
        </button>
      </div>
      <div>
        <button className=" flex flex-col items-center  hover:underline hover:decoration-2 hover:underline-offset-[16px] ">
          <Image src={design} alt={"avatar"} height={24} width={24} />
          <span className="text-xs font-light text-gray-300 pt-2">
            Design
          </span>
        </button>
      </div>

    </div>
  )
}

export default Types