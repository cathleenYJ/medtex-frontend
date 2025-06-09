import { SectionContainer } from "@ui/section-container";
import { RegisterForm } from "@/components/registration/register-form";
import { RegistrationHeader } from "@/components/registration/registration-header";
import { serverFetch } from "@/data/server";

export default async function EventRegistrationFormPage() {
  // Fetch registration data and company types
  const registrationData = await serverFetch.registration.data();
  const companyTypes = await serverFetch.registration.companyTypes();

  return (
    <div data-home className="pb-40">
      <RegistrationHeader title="Event Registration Form" />
      <SectionContainer>
          <RegisterForm 
            packages={registrationData.packages}
            companyTypes={companyTypes}
            theme="green"
          />
      </SectionContainer>
    </div>
  );
}
