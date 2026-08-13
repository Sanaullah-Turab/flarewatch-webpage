const items = [
  { status: "done", label: "Problem validated, data access confirmed" },
  { status: "done", label: "Architecture and data pipeline finalized" },
  { status: "progress", label: "Dashboard, anomaly scoring, and PDF reports" },
  { status: "upcoming", label: "Public beta launch, August 2026" },
  { status: "upcoming", label: "Operator and ESG team pilot program" },
] as const;

function Dot({ status }: { status: "done" | "progress" | "upcoming" }) {
  if (status === "upcoming") {
    return (
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: "rgba(255,122,18,0.2)" }}
      />
    );
  }
  if (status === "progress") {
    return (
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF7A12] opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF7A12]" />
      </span>
    );
  }
  return <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A12]" />;
}

export default function StatusTimeline() {
  return (
    <section className="bg-[#111113] px-6 py-20">
      <div className="mx-auto max-w-[640px] text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF7A12]">
          Development status
        </span>
        <h2 className="mt-3 text-[26px] font-bold text-white md:text-[28px]">
          In active development
        </h2>
        <span
          className="mt-5 inline-block rounded-full border px-[14px] py-[5px] text-[11px]"
          style={{
            borderColor: "rgba(255,122,18,0.4)",
            backgroundColor: "rgba(255,122,18,0.1)",
            color: "#FFB35C",
          }}
        >
          Summer 2026 Cohort
        </span>

        <div className="relative mx-auto mt-10 max-w-[520px] text-left">
          <div
            className="absolute left-[5px] top-1 bottom-1 w-px"
            style={{ backgroundColor: "rgba(255,122,18,0.2)" }}
          />
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <Dot status={item.status} />
                <p
                  className="text-[14px]"
                  style={{
                    color: item.status === "upcoming" ? "#6B7280" : "#FFFFFF",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-7 text-center text-[13px] text-[#6B7280]">
          Sigma FlareWatch is being built by the SigmaE Global Summer 2026 internship
          cohort. The platform will be publicly available in August 2026.
        </p>
      </div>
    </section>
  );
}
