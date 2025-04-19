interface Couple1Props {
  brideName: string;
  groomName: string;
}

const Couple1 = (props: Couple1Props) => {
  const { brideName, groomName } = props;
  return (
    <div className="flex justify-between m-auto items-center px-[6vw]">
      <p className="text-[40px] font-ephesis" data-aos="fade-right">
        {groomName}
      </p>
      <p className="text-[30px] font-ephesis" data-aos="fade-down">
        &
      </p>
      <p className="text-[40px] font-ephesis" data-aos="fade-left">
        {brideName}
      </p>
    </div>
  );
};

export default Couple1;
