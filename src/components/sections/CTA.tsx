export function CTA() {
  return (
    <section className="flex flex-col items-center gap-12 p-60 max-md:px-[60px] max-md:py-[120px] max-sm:px-[30px] max-sm:py-[60px]">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="2071:17401" layer-name="Finance" width="460" height="364" viewBox="0 0 460 364" fill="none" xmlns="http://www.w3.org/2000/svg" class="finance-illustration" style="width: 380px; height: 187px">...</svg>`,
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[80px] font-extrabold tracking-[-0.8px] max-md:text-6xl max-sm:text-[40px]">
          Start Earning today
        </h2>
        <div className="flex items-center gap-8 bg-[#FFF1EC] px-7 py-[18px] rounded-[103px]">
          <p className="text-[#271813] text-2xl font-medium">
            Ready to start making some cash with 1000xrewards!
          </p>
          <button className="text-white text-sm font-medium cursor-pointer bg-[#AA3700] px-6 py-2.5 rounded-[100px]">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
}
