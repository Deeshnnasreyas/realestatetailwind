import Appartment from "./Appartment/Appartment";
import Hero from "./Hero/Hero";
import Properties from "./Properties/Properties";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Appartment />
      <Properties />
    </div>
  );
};

export default Home;
