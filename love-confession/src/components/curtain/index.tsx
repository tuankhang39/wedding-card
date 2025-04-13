import React, { useState } from "react";
import "./styles.scss";
import config from "../../config/envConfig";

const CurtainEffect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);

  const handleHeartClick = () => {
    setIsHeartAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsHeartAnimating(false);
    }, 500);
  };

  return (
    <div className={`curtain-container ${isOpen ? "open" : ""}`}>
      <div className="curtain left">
        <img
          src={`${config.BASE_PATH}template6/background.jpg`}
          className="w-[100%] h-[100vh] object-cover object-left sm:w-full sm:object-center "
        />
      </div>
      <div className="curtain right">
        <img
          src={`${config.BASE_PATH}template6/background.jpg`}
          className="w-[100%] h-[100vh] object-cover object-right sm:w-full sm:object-center "
        />
      </div>
      {!isOpen && (
        <img
          src={`${config.BASE_PATH}template6/thutim.gif`}
          className={`heart-button ${isHeartAnimating ? "animate-heart" : ""}`}
          onClick={handleHeartClick}
        />
      )}
    </div>
  );
};

export default CurtainEffect;
