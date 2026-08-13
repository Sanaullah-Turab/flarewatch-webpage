const cards = [
  {
    tag: "ESG and sustainability teams",
    body: "Access independent, satellite-verified flaring data for portfolio monitoring, reporting, and regulatory response, without enterprise pricing.",
  },
  {
    tag: "Operators",
    body: "Demonstrate flaring reduction progress to lenders, regulators, and stakeholders with a credible third-party data source.",
  },
  {
    tag: "Lenders and analysts",
    body: "Verify flaring commitments in your portfolio independently. Satellite data, not self-reported figures.",
  },
];

export default function WhoItIsFor() {
  return (
    <section className="bg-[#0A0A0B] px-6 py-20">
      <div className="mx-auto max-w-[1140px] text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF7A12]">
          Who it is for
        </span>
        <h2 className="mx-auto mt-3 max-w-xl text-[26px] font-bold text-white md:text-[28px]">
          Three audiences, one platform
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="rounded-xl bg-[#0D0D0F] p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: "2px solid rgba(255,122,18,0.45)",
              }}
            >
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#FF7A12]">
                {card.tag}
              </p>
              <p className="text-[13px] leading-[1.65] text-[#6B7280]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
