import { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardSwiperProps {
  id: number;
  cards: ReactElement[];
}

interface CardSwiper {
  id: string;
}

const swipeConfidenceThreshold = 50;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const CardSwiper = (props: CardSwiperProps) => {
  const { cards } = props;
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < cards.length) {
      setPage([newPage, newDirection]);
    }
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotate: direction > 0 ? 15 : -15, // Add slight rotation when entering
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: 0, // Reset rotation when centered
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotate: direction < 0 ? 15 : -15, // Slight rotation when exiting
    }),
  };

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute w-full h-full bg-white rounded-xl shadow-md flex items-center justify-center text-2xl"
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            rotate: { type: "spring", stiffness: 300, damping: 30 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {cards[page]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardSwiper;
