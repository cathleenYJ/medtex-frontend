import { notFound } from "next/navigation";
import { ProfileBanner, Opportunities, Qualfication, CompanyOverview, Highlights, Contact } from "@dashboard/profile";
import { SectionContainer } from "@ui/section-container";
import { serverFetch } from "@/data/server";

export default async function ProfilePage({ params }: { params: Promise<{ buyer_id: string }> }) {
  const { buyer_id } = await params;
  const [buyer, ...rest] = await serverFetch.buyers.data(Number(buyer_id));
  if (!buyer || rest.length > 0) notFound();
  return (
    <div className="sm:-mt-32" data-theme={buyer.profile_theme}>
      <ProfileBanner buyer={buyer} />
      <SectionContainer className="py-24 gap-20">
        <Opportunities buyer={buyer} />
        <Qualfication buyer={buyer} />
        <CompanyOverview buyer={buyer} />
        <Highlights buyer={buyer} />
        <Contact />
      </SectionContainer>
    </div>
  );
}
