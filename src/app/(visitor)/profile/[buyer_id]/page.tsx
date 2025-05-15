import { notFound } from "next/navigation";
import { ProfileBanner, ProfileContainer, ProfileOpportunities, ProfileQualfication, ProfileCompanyOverview, ProfileHighlights, ProfileContact } from "@dashboard/profile";
import { serverFetch } from "@/data/server";

export default async function ProfilePage({ params }: { params: Promise<{ buyer_id: string }> }) {
  const { buyer_id } = await params;
  const [buyer] = await serverFetch.buyers.data(Number(buyer_id));
  if (!buyer) notFound();
  return (
    <div className="-mt-32" data-theme={buyer.profile_theme}>
      <ProfileBanner buyer={buyer} />
      <ProfileContainer>
        <ProfileOpportunities buyer={buyer} />
        <ProfileQualfication buyer={buyer} />
        <ProfileCompanyOverview buyer={buyer} />
        <ProfileHighlights buyer={buyer} />
        <ProfileContact />
      </ProfileContainer>
    </div>
  );
}
