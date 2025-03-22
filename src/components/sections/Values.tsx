interface ValueCardProps {
  title: string;
  description: string;
}

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="flex-[1_0_calc(33.333%_-_16px)] min-w-[300px] bg-[#FFF1EC] p-6 rounded-xl max-md:w-full">
      <h3 className="text-[#271813] text-[28px] font-semibold leading-[37px] tracking-[0.185px] mb-2">
        {title}
      </h3>
      <p className="text-[#5B4138] text-base font-normal leading-6 tracking-[0.5px]">
        {description}
      </p>
    </div>
  );
}

export function Values() {
  const values = [
    {
      title: "Integrity",
      description:
        "We prioritize transparency and trust in all our interactions.",
    },
    {
      title: "Innovation",
      description: "We strive to push boundaries and explore new ideas.",
    },
    {
      title: "Dedication",
      description:
        "We are committed to delivering high-quality work and exceeding expectations.",
    },
    {
      title: "Customer Focus",
      description: "We put our customers at the center of everything we do.",
    },
    {
      title: "Efficiency",
      description: "We aim to optimize processes and maximize productivity.",
    },
  ];

  return (
    <section className="flex flex-col gap-12 p-60 max-md:px-[60px] max-md:py-[120px] max-sm:px-[30px] max-sm:py-[60px]">
      <h2 className="text-[70px] font-bold">Our value</h2>
      <div className="flex flex-wrap gap-6 max-md:flex-col">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  );
}
