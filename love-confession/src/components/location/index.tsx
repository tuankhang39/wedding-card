import IframeMap from "../map";

interface LocationProp {
  className?: string;
  home?: string;
  address?: string;
}

const Location = (props: LocationProp) => {
  const { home, address } = props;
  return (
    <div className="p-5 pt-0 pb-2">
      <p
        className="text-[50px] font-ephesis w-fit m-auto px-5 border-t-2"
        data-aos="fade-down"
      >
        Địa điểm tổ chức
      </p>
      <div>
        <p className="uppercase" data-aos="fade-down">
          {home}
        </p>
        <p className="pb-5" data-aos="fade-down">
          {address}
        </p>
      </div>
      <IframeMap />
    </div>
  );
};

export default Location;
