import { ProfileBanner, ProfileContainer, ProfileOpportunities, ProfileQualfication, ProfileCompanyOverview, ProfileHighlights, ProfileContact } from "@dashboard/profile";
import { serverFetch } from "@/data/server";

export default async function ProfilePage() {
  const [buyer] = await serverFetch.buyers.data(1);
  return (
    <div className="-mt-32" data-theme="green">
      <ProfileBanner buyer={buyer} />
      <ProfileContainer>
        <ProfileOpportunities buyer={buyer} />
        <ProfileQualfication buyer={buyer} />
        <ProfileCompanyOverview buyer={buyer} />
        <ProfileHighlights buyer={buyer} />
        <ProfileContact buyer={buyer} />
      </ProfileContainer>
    </div>
  );
}
