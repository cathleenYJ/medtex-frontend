import clsx from "clsx";
import { Cooperation, MoneyBag, Discover } from "@icons";
import { Card, Cards } from "@ui/card";
import { Tag } from "@ui/tag";
import type { BuyerData } from "@/types";
import { SectionTitle } from "@ui/title";
import { Section } from "@ui/block";

export const ProfileOpportunities: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  return (
    <Section className="flex-col">
      <SectionTitle>Opportunities</SectionTitle>
      <Cards>
        <OpportunitiesCard className="bg-secondary" icon={<Discover color="var(--six)" />} title={<span className="text-white/80">What we’re looking for?</span>}>
          <div className="flex flex-wrap gap-2.5">
            {buyer.purchasing_requirement.map((requirement) => (
              <Tag key={requirement}>{requirement}</Tag>
            ))}
          </div>
        </OpportunitiesCard>
        <OpportunitiesCard className="bg-primary" icon={<Cooperation color="var(--six)" />} title={<span className="text-white/80">Partnership Types</span>}>
          <div className="flex flex-wrap gap-2.5">
            {buyer.partnership_looking_for.map((partnership) => (
              <Tag key={partnership}>{partnership}</Tag>
            ))}
          </div>
        </OpportunitiesCard>
        <OpportunitiesCard className="bg-five" icon={<MoneyBag color="var(--secondary)" />} title={<span className="text-secondary">Estimated Budget</span>}>
          <div className="flex flex-col gap-2.5">
            <div className="text-primary text-3xl font-bold">USD {buyer.estimated_procurement_amount}</div>
            <div className="text-primary text-[1.125rem]">Project‑based Negotiation</div>
          </div>
        </OpportunitiesCard>
      </Cards>
    </Section>
  );
};

const OpportunitiesCard: React.FC<{ className?: string; icon?: React.ReactNode; title?: React.ReactNode; children?: React.ReactNode }> = ({ icon, className, title, children }) => {
  return (
    <Card className={clsx("w-max grow p-10 flex flex-col gap-7", className)}>
      <div className="flex flex-col gap-2.5">
        <div className="w-10 h-10 flex items-center">{icon}</div>
        <div className="text-2xl">{title}</div>
      </div>
      {children}
    </Card>
  );
};
