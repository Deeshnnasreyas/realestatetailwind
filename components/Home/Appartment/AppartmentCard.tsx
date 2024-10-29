type Props = {
  icon: string;
  type: number;
  number: number;
};
const AppartmentCard = ({ icon, type, number }: Props) => {
  return (
    <div className="shadow-lg rounded-lg p-6 hover:scale-110 transition-all duration-300">
      <img src={icon} alt="image" width={200} height={200} />

      <div className="mt-12">
        <h1 className="font-bold text-left text-lg ">{type}</h1>
        <span className="text-black text-sm opacity-100">
          {number} Properties
        </span>
      </div>
    </div>
  );
};

export default AppartmentCard;
