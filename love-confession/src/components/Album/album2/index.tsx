import clsx from "clsx";

interface Album1 {
  weddingImages: string[];
}

const Album2 = (props: Album1) => {
  const { weddingImages } = props;
  const isEven = (number: number): boolean => {
    return number % 2 === 0;
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-2 mx-5">
        {weddingImages.slice(0, 3).map((img, index) => (
          <div
            key={index}
            className={clsx(
              "border-[10px]",
              isEven(index + 1) ? "mt-5" : "mb-5"
            )}
            data-aos="fade-up"
          >
            <img src={`${img}`} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Album2;
