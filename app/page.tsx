import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import DashboardPlaceholder from "@/components/DashboardPlaceholder";
import DataSection from "@/components/DataSection";
import WhoItIsFor from "@/components/WhoItIsFor";
import StatusTimeline from "@/components/StatusTimeline";
import ContactCTA from "@/components/ContactCTA";

export default function FlareWatchPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Capabilities />
      <DashboardPlaceholder />
      <DataSection />
      <WhoItIsFor />
      <StatusTimeline />
      <ContactCTA />
    </main>
  );
}
