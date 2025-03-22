export function Hero() {
  return (
    <section className="flex flex-col items-center gap-40 pt-[260px] pb-[100px] px-60 max-md:px-[60px] max-md:py-[120px] max-sm:px-[30px] max-sm:py-[60px]">
      <div className="flex flex-col gap-6">
        <h1 className="text-[80px] font-bold max-md:text-6xl max-sm:text-[40px]">
          About 1000XRewards
        </h1>
        <p className="text-[#5B4138] text-base font-normal leading-6 tracking-[0.5px]">
          At 1000xRewards, our mission is to revolutionize the gaming experience
          by rewarding players for their passion and dedication. Founded in
          [Year], we believe that every game played should bring value beyond
          entertainment. Our platform seamlessly blends fun gameplay with
          tangible rewards, creating a community where players are appreciated
          and rewarded for their time and skill.
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<svg id="2046:989" layer-name="Illustration" width="463" height="450" viewBox="0 0 463 450" fill="none" xmlns="http://www.w3.org/2000/svg" class="rewards-illustration" style="width: 460px; height: 448px">...</svg>`,
        }}
      />
    </section>
  );
}
