export default function DashboardPlaceholder() {
  return (
    <section className="bg-[#0A0A0B] px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <div
          className="flex aspect-video flex-col items-center justify-center rounded-xl bg-[#0D0D0F] text-center"
          style={{ border: "1px dashed rgba(255,122,18,0.25)" }}
        >
          <p className="text-[18px] text-white">Live dashboard preview</p>
          <p className="mt-2 text-[14px] text-[#FF7A12]">Available August 2026</p>
        </div>
        <p className="mt-4 text-center text-[12px] italic text-[#6B7280]">
          Interactive map, anomaly scores, and country drill-downs.
        </p>
      </div>
    </section>
  );
}
