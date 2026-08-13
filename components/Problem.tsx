export default function Problem() {
  return (
    <section className="bg-[#111113] px-6 py-20">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <div className="text-[76px] font-extrabold leading-none text-[#FF7A12]">
            151 BCM
          </div>
          <p className="mt-2 text-sm text-[#6B7280]">
            billion cubic meters flared globally in 2024
          </p>
          <p className="mt-2 text-[11px] italic text-[#4B5563]">
            Source: World Bank GGFR
          </p>
        </div>
        <div>
          <h2 className="text-[26px] font-bold text-white md:text-[28px]">
            A problem hiding in plain sight
          </h2>
          <p className="mt-5 text-[15px] leading-[1.8] text-[#9CA3AF]">
            Gas flaring, the burning of associated gas at oil wellheads when there is no
            pipeline or market for it, wasted the equivalent of 19 to 63 billion dollars
            in recoverable energy in 2024 alone. It produced roughly 400 million tons of
            CO2-equivalent. Regulators are tightening. Lenders are beginning to attach
            flaring reduction targets to oil and gas financing. Independent,
            satellite-verified monitoring is becoming a compliance requirement, not an
            optional extra.
          </p>
          <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-white">
            Sigma FlareWatch makes that monitoring accessible.
          </p>
        </div>
      </div>
    </section>
  );
}
