import { FC } from "react";

interface GiftProps {
  title: string;
  image: string;
}

const Gift: FC<GiftProps> = ({ title, image }: GiftProps) => {
  return (
    <div className="fixed z-10 bottom-0 right-0 w-16">
      <img src={image} alt={title} />
      <h3>Gửi lời chúc</h3>
    </div>
  );
};

export default Gift;
