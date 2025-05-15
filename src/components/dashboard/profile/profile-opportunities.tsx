import { Cooperation, MoneyBag, Discover } from "@icons";
import { Tag } from "@ui/tag";
import type { BuyerData } from "@/types";
import { ProfileCard } from "./profile-card";
import { ProfileSection } from "./profile-section";

export const ProfileOpportunities: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  return (
    <ProfileSection title="Opportunities">
      <ProfileCard className="w-max grow bg-secondary" icon={<Discover color="var(--six)" />} title={<span className="text-white/80">What we’re looking for?</span>}>
        <div className="flex flex-wrap gap-2.5">
          {buyer.purchasing_requirement.map((requirement) => (
            <Tag key={requirement}>{requirement}</Tag>
          ))}
        </div>
      </ProfileCard>
      <ProfileCard className="w-max grow bg-primary" icon={<Cooperation color="var(--six)" />} title={<span className="text-white/80">Partnership Types</span>}>
        <div className="flex flex-wrap gap-2.5">
          {buyer.partnership_looking_for.map((partnership) => (
            <Tag key={partnership}>{partnership}</Tag>
          ))}
        </div>
      </ProfileCard>
      <ProfileCard className="w-max grow bg-five" icon={<MoneyBag color="var(--secondary)" />} title={<span className="text-secondary">Estimated Budget</span>}>
        <div className="flex flex-col gap-2.5">
          <div className="text-primary text-2xl sm:text-[1.75rem] font-bold">USD {buyer.estimated_procurement_amount}</div>
          <div className="text-primary text-sm sm:text-lg">Project‑based Negotiation</div>
        </div>
      </ProfileCard>
    </ProfileSection>
  );
};
