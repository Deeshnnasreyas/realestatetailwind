import SectionHeading from "@/components/Helper/SectionHeading";
import { PropertiesData } from "@/data/data";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Discover Our Properties" />
        <div className="mt-10 mt:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          {PropertiesData.map((items: any, index: any) => (
            <div key={index}>
              <PropertyCard
                location={items.location}
                bedroom={items.bedroom}
                bathroom={items.bathroom}
                size={items.size}
                price={items.price}
                image={items.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
