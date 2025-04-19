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

const Parent = (props: ParentProps) => {
  const { groomParent, brideParent } = props;
  return (
    <div className="grid grid-cols-2 m-auto px-[5vw] my-5 font-lustria">
      <div className="uppercase text-[13px] font-bold" data-aos="fade-right">
        <h4>Nhà gái</h4>
        <p className="capitalize">Ông {groomParent.fatherName}</p>
        <p className="capitalize">Bà {groomParent.motherName}</p>
      </div>
      <div className="uppercase text-[13px] font-bold" data-aos="fade-left">
        <h4>Nhà trai</h4>
        <p className="capitalize">Ông {brideParent.fatherName}</p>
        <p className="capitalize">Bà {brideParent.fatherName}</p>
      </div>
    </div>
  );
};

export default Parent;
