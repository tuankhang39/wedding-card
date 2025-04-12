interface Album1 {
  weddingImages: string[];
}

const Album1 = (props: Album1) => {
  const { weddingImages } = props;
  const isEven = (number: number): boolean => {
    return number % 2 === 0;
  };
  return (
    <>
      <div className="flex">
        <p
          className="text-left px-5 pb-2 font-ephesis text-[35px]"
          data-aos="zoom-in"
        >
          Album ảnh cưới
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mx-5">
        {weddingImages.map((img, index) => (
          <div
            key={index}
            className="border-[10px]"
            data-aos={isEven(index + 1) ? "fade-left" : "fade-right"}
          >
            <img src={`/template1/${img}`} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Album1;
