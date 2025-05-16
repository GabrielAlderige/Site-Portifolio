import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset, onClick }) => {;
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } lg:block xl:left-[2.1875rem]`}
        onClick={onClick}
      />

      <PlusSvg
        className={`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } lg:block xl:right-[2.1875rem]`}
        onClick={onClick}
      />
    </>
  );
};

export default SectionSvg;
