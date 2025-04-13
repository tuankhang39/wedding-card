import "./styles.scss";

const WaterSplash = () => {
  return (
    <div className="relative w-full h-screen bg-blue-100 overflow-hidden">
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-splash">
        <div className="splash-circle"></div>
        <div className="splash-circle delay-200"></div>
        <div className="splash-circle delay-400"></div>
      </div>
    </div>
  );
};

export default WaterSplash;
