import config from "../../../config/envConfig";

interface ParentProps {
  groomParent: {
    fatherName?: string;
    motherName?: string;
  };
  brideParent: {
    fatherName?: string;
    motherName?: string;
  };
}

const Parent2 = (props: ParentProps) => {
  const { groomParent, brideParent } = props;
  return (
    <div className="m-auto px-[5vw] my-5 font-lustria">
      <div
        className="uppercase text-[13px] font-bold mt-5 text-left"
        data-aos="fade-left"
      >
        <h4>Nhà trai</h4>
        <p className="capitalize">Ông {brideParent.fatherName}</p>
        <p className="capitalize">Bà {brideParent.motherName}</p>
      </div>
      <div
        className="uppercase text-[13px] font-bold text-right"
        data-aos="fade-right"
      >
        <h4>Nhà gái</h4>
        <p className="capitalize">Ông {groomParent.fatherName}</p>
        <p className="capitalize">Bà {groomParent.motherName}</p>
      </div>
    </div>
  );
};

export default Parent2;
