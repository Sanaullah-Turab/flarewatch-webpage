import Image from "next/image";

export default function DashboardPlaceholder() {
  return (
    <section className="bg-[#0A0A0B] px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <div className="overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,122,18,0.2)" }}>
          <Image
            src="/dashboard.png"
            alt="FlareWatch dashboard preview"
            width={900}
            height={506}
            className="w-full object-cover"
            priority
          />
        </div>
        <p className="mt-4 text-center text-[12px] italic text-[#6B7280]">
          Interactive map, anomaly scores, and country drill-downs.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="group relative">
            <a
              href="/dashboard"
              aria-disabled="true"
              tabIndex={-1}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-[14px] font-medium text-white cursor-not-allowed select-none"
              style={{ background: "rgba(255,122,18,0.15)", border: "1px solid rgba(255,122,18,0.35)", pointerEvents: "none" }}
            >
              Launch Dashboard
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="#FF7A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-[#1A1A1C] px-2.5 py-1 text-[11px] text-[#FF7A12] opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap" style={{ border: "1px solid rgba(255,122,18,0.25)" }}>
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
