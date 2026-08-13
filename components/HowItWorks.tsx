import { Satellite, Filter, TrendingUp, MapPin } from "lucide-react";

const steps = [
  {
    icon: Satellite,
    title: "Satellite data",
    body: "NOAA's VIIRS Nightfire catalog records every gas flare detected globally, going back to 2012. Free and publicly available.",
  },
  {
    icon: Filter,
    title: "Clean and aggregate",
    body: "Annual flare volumes are aggregated by country and region, producing a consistent time series for each entity.",
  },
  {
    icon: TrendingUp,
    title: "Score anomalies",
    body: "A statistical model flags year-over-year deviations that exceed normal variation for each entity's own historical pattern.",
  },
  {
    icon: MapPin,
    title: "Surface insights",
    body: "Scores are published to a live interactive map and exportable PDF reports.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0A0A0B] px-6 py-20">
      <div className="mx-auto max-w-[1140px] text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF7A12]">
          How it works
        </span>
        <h2 className="mx-auto mt-3 max-w-xl text-[26px] font-bold text-white md:text-[28px]">
          From satellite to insight in four steps
        </h2>

        <div className="relative mx-auto mt-14 flex max-w-[900px] flex-col gap-12 md:flex-row md:justify-between md:gap-4">
          <div
            className="absolute left-[22px] top-[22px] hidden h-px w-full md:block"
            style={{ backgroundColor: "rgba(255,122,18,0.15)" }}
          />
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center md:w-1/4"
            >
              <div
                className="z-10 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#1A1A1C]"
                style={{ border: "1px solid rgba(255,122,18,0.25)" }}
              >
                <step.icon size={22} color="#FF7A12" />
              </div>
              <h3 className="mt-3.5 text-[15px] font-bold text-white">{step.title}</h3>
              <p className="mt-2 max-w-[200px] text-[13px] leading-[1.65] text-[#6B7280]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
