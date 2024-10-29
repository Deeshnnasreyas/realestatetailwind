import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
type Props = {
  location: string;
  bedroom: string;
  bathroom: string;
  size: number;
  price: number;
  image: string;
};
const PropertyCard = ({
  location,
  bedroom,
  bathroom,
  size,
  price,
  image,
}: Props) => {
  return (
    <div className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg">
      <div className="relative">
        <Image
          src={image}
          alt="image"
          width={300}
          height={300}
          className="w-full object-cover group-hover:scale-110 transition-all duration-200"
        />
        <h1 className="px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black w-fit text-white rounded-lg">
          <span className="text-base font-bold">${price} </span>/ mo
        </h1>
        <div className="flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-rose-600 w-fit text-white rounded-md font-bold">
          <MdElectricBolt />
          <span>Featured</span>
        </div>
      </div>
      <div className="p-5">
        <h1 className="mt-4 group-hover:underline text-gray-900 font-bold text-lg">
          {location}
        </h1>
        <div className="flex mt-6 justify-between w-full lg:w-[80%] border-b-2">
          <div className="flex items-center space-x-2">
            <FaBath className="text-rose-500" />
            <p className="text-sm text-gray-500 mt-3">{bathroom}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaBed className="text-rose-500" />
            <p className="text-sm text-gray-500 mt-3">{bedroom}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaSquare className="text-rose-500" />
            <p className="text-sm text-gray-500 mt-3">{size} Sqrt</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-[1.2px] mt-5 mb-4">
          <h1 className="text-xs text-gray-600 text-bold">For Rent</h1>
          <div className="flex items-center space-x-3 text-red-500 ">
            <BiLinkExternal />
            <BsPlusSquare />
            <BsHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
