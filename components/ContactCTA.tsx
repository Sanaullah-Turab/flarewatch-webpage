export default function ContactCTA() {
  return (
    <section className="bg-[#0A0A0B] px-6 py-16">
      <div
        className="mx-auto max-w-[680px] rounded-2xl p-10 text-center md:p-[60px]"
        style={{
          border: "1px solid rgba(255,122,18,0.2)",
        }}
      >
        <h2 className="text-[28px] font-bold text-white">
          Interested in early access or a pilot?
        </h2>
        <p className="mt-4 text-[15px] leading-[1.75] text-[#9CA3AF]">
          We are working with a small number of operators, ESG teams, and lenders
          ahead of the August 2026 public launch. If you want to be among the first to
          use the platform, reach out directly.
        </p>
        <a
          href="/contact?subject=Sigma+FlareWatch+early+access"
          className="mt-7 inline-block rounded-lg bg-[#FF7A12] px-7 py-3 font-bold text-black transition hover:brightness-110"
        >
          Get in touch
        </a>
        <p className="mt-3 text-[12px] text-[#6B7280]">
          Or email us at info@sigmae.global
        </p>
      </div>
    </section>
  );
}
