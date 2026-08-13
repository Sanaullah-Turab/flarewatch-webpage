export default function DataSection() {
  return (
    <section className="bg-[#111113] px-6 py-20">
      <div className="mx-auto max-w-[640px] text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF7A12]">
          The data
        </span>
        <h2 className="mt-3 text-[26px] font-bold text-white md:text-[28px]">
          Built on the same source as the World Bank
        </h2>
        <p className="mt-5 text-left text-[15px] leading-[1.8] text-[#9CA3AF]">
          Sigma FlareWatch uses the VIIRS Nightfire annual global flare catalog,
          published by NOAA&apos;s Earth Observation Group at the Payne Institute,
          Colorado School of Mines. This is the primary global flaring dataset used by
          the World Bank&apos;s Global Flaring and Methane Reduction Partnership for its
          own annual reporting.
        </p>
        <p className="mt-4 text-left text-[15px] leading-[1.8] text-[#9CA3AF]">
          The data covers 2012 through 2024. It is free, publicly available, and
          carries no commercial data access fees. This keeps FlareWatch accessible at a
          price point that enterprise satellite data providers cannot match.
        </p>
        <p
          className="mt-6 text-left text-[12px] italic text-[#4B5563]"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "16px",
          }}
        >
          Flare detection data: Earth Observation Group, Payne Institute for Public
          Policy (VIIRS Nightfire). eogdata.mines.edu
        </p>
      </div>
    </section>
  );
}
