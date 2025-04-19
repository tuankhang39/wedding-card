interface Couple2Props {
  brideName: string;
  groomName: string;
}

const Couple2 = (props: Couple2Props) => {
  const { brideName, groomName } = props;
  return (
    <div className="justify-between m-auto items-center px-[6vw]">
      <p className="text-[35px] font-ephesis text-left" data-aos="fade-right">
        {groomName}
      </p>
      <div className="text-[20px] font-ephesis text-left" data-aos="fade-down">
        and
      </div>
      <p className="text-[35px] font-ephesis text-left" data-aos="fade-left">
        {brideName}
      </p>
    </div>
  );
};

export default Couple2;
