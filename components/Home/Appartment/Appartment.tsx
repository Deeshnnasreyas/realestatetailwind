import SectionHeading from "@/components/Helper/SectionHeading";
import { appartmentTypeData } from "@/data/data";
import AppartmentCard from "./AppartmentCard";

const Appartment = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Appartment Types" />
        <div className="grid grid-cols-1 sm:gri md:grid-cols-3 lg:grid-cols-4 xl:grid-cols mt-10 md:mt-20 gap-8 items-center">
          {appartmentTypeData.map((types: any) => {
            return (
              <div key={types.id}>
                <AppartmentCard
                  icon={types.icon}
                  type={types.type}
                  number={types.number}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Appartment;
