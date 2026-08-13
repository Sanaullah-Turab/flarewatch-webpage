export default function Hero() {
  return (
    <section className="relative bg-[#0A0A0B] px-6 py-[100px] max-md:py-16">
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #FF7A12 20%, #FFB35C 50%, #FF7A12 80%, transparent)",
        }}
      />
      <div className="mx-auto flex max-w-[1140px] flex-col items-center text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FF7A12]">
          Sigma FlareWatch
        </span>
        <h1 className="mt-5 max-w-3xl text-[30px] font-extrabold leading-tight text-white md:text-[44px]">
          Satellite intelligence for gas flaring oversight
        </h1>
        <p className="mt-5 max-w-xl text-[17px] text-[#9CA3AF]">
          AI-powered monitoring of abnormal flaring activity at oil and gas facilities
          worldwide.
        </p>
        <span
          className="mt-7 rounded-full border px-[14px] py-[5px] text-[11px]"
          style={{
            borderColor: "rgba(255,122,18,0.4)",
            backgroundColor: "rgba(255,122,18,0.1)",
            color: "#FFB35C",
          }}
        >
          In active development, Summer 2026
        </span>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/contact?subject=Sigma+FlareWatch+early+access"
            className="rounded-lg bg-[#FF7A12] px-7 py-3 font-bold text-black transition hover:brightness-110"
          >
            Request early access
          </a>
          <a
            href="#how-it-works"
            className="text-white underline-offset-4 hover:underline"
          >
            Learn how it works
          </a>
        </div>
      </div>
    </section>
  );
}
