interface ParentProps {
  girlParent: {
    father?: string;
    mother?: string;
  };
  boyParent: {
    father?: string;
    mother?: string;
  };
}

const Parent = (props: ParentProps) => {
  const { girlParent, boyParent } = props;
  return (
    <div className="grid grid-cols-2 m-auto px-[5vw] my-5 font-lustria">
      <div className="uppercase text-[13px] font-bold" data-aos="fade-right">
        <h4>Nhà gái</h4>
        <p className="capitalize">Ông {girlParent.father}</p>
        <p className="capitalize">Bà {girlParent.mother}</p>
      </div>
      <div className="uppercase text-[13px] font-bold" data-aos="fade-left">
        <h4>Nhà trai</h4>
        <p className="capitalize">Ông {boyParent.father}</p>
        <p className="capitalize">Bà {boyParent.mother}</p>
      </div>
    </div>
  );
};

export default Parent;
