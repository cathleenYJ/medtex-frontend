import { notFound } from "next/navigation";
import { ProfileBanner, ProfileOpportunities, ProfileQualfication, ProfileCompanyOverview, ProfileHighlights, ProfileContact } from "@dashboard/profile";
import { serverFetch } from "@/data/server";
import { SectionContainer } from "@ui/section-container";

export default async function ProfilePage({ params }: { params: Promise<{ buyer_id: string }> }) {
  const { buyer_id } = await params;
  const [buyer, ...rest] = await serverFetch.buyers.data(Number(buyer_id));
  if (!buyer || rest.length > 0) notFound();
  return (
    <div className="sm:-mt-32" data-theme={buyer.profile_theme}>
      <ProfileBanner buyer={buyer} />
      <SectionContainer className="py-24 gap-20">
        <ProfileOpportunities buyer={buyer} />
        <ProfileQualfication buyer={buyer} />
        <ProfileCompanyOverview buyer={buyer} />
        <ProfileHighlights buyer={buyer} />
        <ProfileContact />
      </SectionContainer>
    </div>
  );
}
