import { useNavigate } from "react-router-dom";
import config from "../../config/envConfig";

interface CardProps {
  className?: string;
  cardName: string;
  src: string;
  link: string;
}

const Card = (props: CardProps) => {
  const { cardName, src, link } = props;
  const navigate = useNavigate();
  return (
    <div
      className="w-full mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
      onClick={() => navigate(link)}
    >
      <img
        className="w-full object-cover"
        src={`${config.BASE_PATH}template/${src}`}
        alt="Card image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{cardName}</h2>
      </div>
    </div>
  );
};

export default Card;
