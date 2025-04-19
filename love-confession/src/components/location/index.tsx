import IframeMap from "../map";

interface LocationProp {
  className?: string;
  src: string;
  home?: string;
  address?: string;
}

const Location = (props: LocationProp) => {
  const { home, address, src } = props;
  return (
    <div className="p-5 pt-0 pb-2">
      <p
        className="text-[50px] font-ephesis w-fit m-auto px-5 border-t-2"
        data-aos="fade-down"
      >
        Địa điểm tổ chức
      </p>
      <div>
        <p className="uppercase font-belleza" data-aos="fade-down">
          {home}
        </p>
        <p className="py-3 font-belleza" data-aos="fade-down">
          Địa chỉ: {address}
        </p>
      </div>
      <IframeMap src={src} />
    </div>
  );
};

export default Location;
