type Props = {
  isOpen?: boolean;
};

export default function Hamburger({ isOpen }: Props) {
  const burgerSlide =
    "w-8 h-1 rounded-lg bg-grayish-violet origin-1px transition-all duration-300 ease-linear";
  const xSlide1 =
    "w-8 h-1 rounded-lg bg-grayish-violet origin-1px transition-all duration-300 ease-linear rotate-45";
  const xSlide2 =
    "w-8 h-1 rounded-lg bg-grayish-violet origin-1px transition-all duration-300 ease-linear translate-x-full opacity-0";
  const xSlide3 =
    "w-8 h-1 rounded-lg bg-grayish-violet origin-1px transition-all duration-300 ease-linear -rotate-45";

  return (
    <>
      <div className="w-8 h-8 flex justify-around flex-col flex-nowrap z-10">
        {isOpen ? (
          <>
            <div className={xSlide1} />
            <div className={xSlide2} />
            <div className={xSlide3} />
          </>
        ) : (
          <>
            <div className={burgerSlide} />
            <div className={burgerSlide} />
            <div className={burgerSlide} />
          </>
        )}
      </div>
    </>
  );
}
