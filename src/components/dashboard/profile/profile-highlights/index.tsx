import { ProfileSection } from "@dashboard/profile/profile-section";
import { Card, Cards } from "@ui/card";
import type { BuyerData } from "@/types";
import { HighlightCard } from "./highlight-card";
import { Flag, Market, Target } from "@icons";

export const ProfileHighlights: React.FC<{ buyer: BuyerData }> = ({}) => {
  const highlights1 = [
    {
      title: "Consistent Success in Market Leadership",
      description: "With 25+ years of experience, EP Plus has elevated over 10 niche European brands to regional market leaders through its three specialized business units.",
    },
    {
      title: "Extensive Regional Network",
      description: "The company boasts a vast network of over 10,000 healthcare professionals and 4,000 healthcare establishments, facilitating rapid product adoption and market penetration.",
    },
    {
      title: "Strategic Expansion Across Southeast Asia",
      description: "Established in Malaysia in 1997, we had expanded its footprint to Singapore and Indonesia, with plans to enter Thailand, Vietnam, and the Philippines by 2025.",
    },
  ];
  const highlights2 = [
    {
      icon: <Market color="var(--tertiary)" />,
      title: "Market Presence",
      description: "EP Plus Group, with 27 years of experience, has transformed over 10 niche European brands into market leaders across Pharmaceuticals, Fertility Sciences, and Medical Aesthetics. We now represent 30+ brands and 300 products strategically across ASEAN.",
    },
    {
      icon: <Flag color="var(--tertiary)" />,
      title: "Regional Insights",
      description: "Malaysia’s pharmaceutical industry contributes over US$1.26 billion to GDP and comprises 445 companies valued at US$2 billion, spanning the healthcare supply chain.",
    },
    {
      icon: <Target color="var(--tertiary)" />,
      title: "Strategic Focus Areas",
      description: "Malaysia’s pharmaceutical market is experiencing a surge in demand for generic drugs due to rising healthcare costs. This trend is further supported by government initiatives promoting the use of generics to enhance affordability and accessibility.",
    },
  ];
  return (
    <ProfileSection title="Company Highlights" className="before:absolute before:-z-10 before:content-[''] before:block before:w-[120vw] before:left-1/2 before:-translate-x-1/2 before:h-96 before:rounded-b-[100%] before:border-b-2 before:border-white before:shadow-(--bg-line) before:bg-gradient-to-t before:from-eight before:to-70% before:to-eight/0">
      <Cards className="basis-full flex flex-wrap">
        {highlights1.map(({ title, description }, i) => (
          <HighlightCard key={title} title={title} number={i + 1}>
            {description}
          </HighlightCard>
        ))}
      </Cards>
      <Cards className="basis-full flex flex-row">
        {highlights2.map(({ icon, title, description }) => (
          <Card key={title} className="bg-primary even:bg-linear-0 even:from-secondary/30 even:to-secondary/30 py-8 sm:py-[1.875rem] md:py-10 px-6 sm:px-[1.875rem] md:px-12 basis-full flex flex-wrap gap-y-4 sm:gap-y-[1.875rem]">
            <div className="sm:basis-1/2 basis-full flex gap-5">
              <div className="w-8 h-8">{icon}</div>
              <div className="text-tertiary text-xl font-medium">{title}</div>
            </div>
            <div className="sm:basis-1/2 basis-full text-white">{description}</div>
          </Card>
        ))}
      </Cards>
    </ProfileSection>
  );
};
