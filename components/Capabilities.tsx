const cards = [
  {
    title: "Country-level trend tracking",
    body: "Year-over-year flaring trends for every country in the VIIRS catalog, going back to 2012.",
  },
  {
    title: "Regional drill-down",
    body: "Permian Basin and other high-activity regions available as dedicated views with time-series charts.",
  },
  {
    title: "Anomaly scoring",
    body: "Statistical z-score model flags deviations beyond 1.5 standard deviations from each entity's own historical baseline.",
  },
  {
    title: "Live interactive map",
    body: "Color-coded severity overlay on a global map. Click any country or region to drill into the trend.",
  },
  {
    title: "Automated PDF reports",
    body: "Client-ready, branded PDF reports for any country or region, generated on demand.",
  },
  {
    title: "Verified data source",
    body: "Built on VIIRS Nightfire, the same satellite catalog the World Bank uses for its own annual global flaring tracker.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-[#111113] px-6 py-20">
      <div className="mx-auto max-w-[1140px] text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF7A12]">
          Capabilities
        </span>
        <h2 className="mx-auto mt-3 max-w-xl text-[26px] font-bold text-white md:text-[28px]">
          Built for the people who need to know
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-[#0D0D0F] p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: "2px solid rgba(255,122,18,0.45)",
              }}
            >
              <h3 className="mb-2 text-[15px] font-bold text-white">{card.title}</h3>
              <p className="text-[13px] leading-[1.65] text-[#6B7280]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
