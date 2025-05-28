import { Cooperation, MoneyBag, Discover } from "@icons";
import { Tag } from "@ui/tag";
import { Section } from "@ui/section";
import type { BuyerData } from "@/types";
import { ProfileCard } from "./profile-card";

export const ProfileOpportunities: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  return (
    <Section title="Opportunities">
      <ProfileCard className="w-max grow bg-b2b-lv4" icon={<Discover color="var(--b2b-lv2)" />} title={<span className="text-white/80">What we’re looking for?</span>}>
        <div className="flex flex-wrap gap-2.5">
          {buyer.purchasing_requirement.map((requirement) => (
            <Tag key={requirement}>{requirement}</Tag>
          ))}
        </div>
      </ProfileCard>
      <ProfileCard className="w-max grow bg-b2b-lv6" icon={<Cooperation color="var(--b2b-lv2)" />} title={<span className="text-white/80">Partnership Types</span>}>
        <div className="flex flex-wrap gap-2.5">
          {buyer.partnership_looking_for.map((partnership) => (
            <Tag key={partnership}>{partnership}</Tag>
          ))}
        </div>
      </ProfileCard>
      <ProfileCard className="w-max grow bg-b2b-lv1" icon={<MoneyBag color="var(--b2b-lv4)" />} title={<span className="text-b2b-lv4">Estimated Budget</span>}>
        <div className="flex flex-col gap-2.5">
          <div className="text-b2b-lv6 text-2xl sm:text-[1.75rem] font-bold">USD {buyer.estimated_procurement_amount}</div>
          <div className="text-b2b-lv6 text-sm sm:text-lg">Project‑based Negotiation</div>
        </div>
      </ProfileCard>
    </Section>
  );
};
