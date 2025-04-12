interface IconTop {
  img: string;
}

const IconTop = (prop: IconTop) => {
  return (
    <div className="flex justify-between">
      <img src={prop.img} className="w-[150px]" />
      <img src={prop.img} className="w-[150px] transform -scale-x-100" />
    </div>
  );
};

export default IconTop;
