"use client";

import { useState, useEffect, ReactNode, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, UseFormRegister, FieldErrors } from "react-hook-form";
import clsx from "clsx";
import { Card } from "@/components/ui/card";
import { Section } from "@ui/section";
import { 
  RegistrationFormData, 
  RegistrationPackage, 
  CompanyTypeOption,
  CompanyType,
  PaymentMethod
} from "@/types";
import { Routes } from "@/config/routes";
import { RegistrationSuccessModal } from "./registration-success-modal";

// Form field components
const FormInput = ({ 
  id, 
  label, 
  required = false,
  placeholder,
  register,
  errors,
  type = "text",
  optional = false
}: {
  id: keyof RegistrationFormData;
  label: string;
  required?: boolean;
  placeholder: string;
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
  type?: string;
  optional?: boolean;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-1 text-white">
      {label} {required && <span className="text-red-300">*</span>}
      {optional && <span className="text-white/70"> (Optional)</span>}
    </label>
    <input
      id={id}
      type={type}
      className={clsx(
        "w-full rounded-md border px-4 py-2 bg-white/20 text-white",
        errors[id] ? "border-red-300" : "border-white/30"
      )}
      placeholder={placeholder}
      {...register(id, { 
        required: required ? `${label} is required` : false,
        ...(type === "email" && {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })
      })}
    />
    {errors[id] && (
      <p className="text-red-300 text-sm mt-1">{errors[id]?.message}</p>
    )}
  </div>
);

const StepCard = ({ 
  title, 
  children, 
  theme 
}: { 
  title: string; 
  children: ReactNode;
  theme?: "green" | "blue" | "red";
}) => (
  <Card className="overflow-hidden w-full relative transition-all hover:shadow-lg" theme={theme}>
    <div className="flex flex-col h-full w-full relative z-10">
      <div className="bg-[var(--attribute-block)] bg-opacity-80 text-white px-6 py-3 relative z-20">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="flex-1 p-6 text-white relative z-20">
        {children}
      </div>
    </div>
    {/* Gradient background that won't affect input fields */}
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-20 z-0"></div>
  </Card>
);

// Define form steps
type FormStep = {
  name: string;
  title: string;
  fields: Array<keyof RegistrationFormData>;
};

const FORM_STEPS: FormStep[] = [
  {
    name: "company",
    title: "Company Information",
    fields: ["companyName", "companyType", "otherCompanyTypeDesc", "taxId"]
  },
  {
    name: "attendee",
    title: "Attendee Information",
    fields: ["attendeeName", "jobTitle", "phoneNumber", "email"]
  },
  {
    name: "package",
    title: "Package Selection",
    fields: ["packageId"]
  },
  {
    name: "payment",
    title: "Payment Method",
    fields: ["paymentMethod"]
  },
];

type RegisterFormProps = {
  packages: RegistrationPackage[];
  companyTypes: CompanyTypeOption[];
  theme?: "green" | "blue" | "red";
};

// Add this custom CSS at the top of your file or create a separate CSS file
const radioStyles = `
  .custom-radio input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid var(--b2b-lv3);
    border-radius: 50%;
    background-clip: content-box;
    padding: 3px;
    margin-top: 3px;
  }
  
  .custom-radio input[type="radio"]:checked {
    background-color: var(--b2b-lv3);
  }
  
  .package-option {
    transition: all 0.2s ease;
  }
  
  .package-option:hover {
    border-color: var(--b2b-lv2);
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  .package-option.selected {
    border-color: var(--b2b-lv3);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export function RegisterForm({ packages, companyTypes, theme }: RegisterFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();
  
  // Fix: Wrap the component that uses useSearchParams in a Suspense boundary
  return (
    <Section className="pt-[7.5rem]">
      <div data-card-theme={theme} className="w-full">
        <Suspense fallback={<LoadingFormState />}>
          <FormContent 
            packages={packages} 
            companyTypes={companyTypes} 
            theme={theme} 
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            showOtherField={showOtherField}
            setShowOtherField={setShowOtherField}
            showSuccessModal={showSuccessModal}
            setShowSuccessModal={setShowSuccessModal}
            router={router}
          />
        </Suspense>
      </div>
    </Section>
  );
}

// Simple loading state component
function LoadingFormState() {
  return (
    <div className="text-white text-center py-8">
      <div className="animate-pulse">Loading registration form...</div>
    </div>
  );
}

// Actual form content component that uses useSearchParams
function FormContent({ 
  packages, 
  companyTypes, 
  theme,
  currentStep,
  setCurrentStep,
  isSubmitting,
  setIsSubmitting,
  showOtherField,
  setShowOtherField,
  showSuccessModal,
  setShowSuccessModal,
  router
}: RegisterFormProps & {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  showOtherField: boolean;
  setShowOtherField: React.Dispatch<React.SetStateAction<boolean>>;
  showSuccessModal: boolean;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  router: ReturnType<typeof useRouter>;
}) {
  const searchParams = useSearchParams();
  
  // Get packageId from URL query parameter - check if searchParams exists first
  const packageIdFromURL = searchParams ? searchParams.get('packageId') : null;

  // Use explicitly separate form fields to prevent value bleed between steps
  const { register, handleSubmit, trigger, watch, setValue, formState: { errors } } = useForm<RegistrationFormData>({
    mode: "onChange",
    defaultValues: {
      companyName: '',
      companyType: '' as CompanyType,
      otherCompanyTypeDesc: '',
      taxId: '',
      attendeeName: '',
      jobTitle: '',
      phoneNumber: '',
      email: '',
      packageId: '',
      paymentMethod: '' as PaymentMethod,
    }
  });
  
  const companyType = watch("companyType");
  const selectedPackage = watch("packageId");

  // Debug form values changes
  const formValues = watch();
  useEffect(() => {
    // This will help identify if values are changing unexpectedly
    console.log("Form values updated:", formValues);
  }, [formValues]);

  // Initialize selected package if packages exist, prioritizing the one from URL
  useEffect(() => {
    if (packages.length > 0) {
      // If we have a package ID from the URL and it exists in our packages list, use that
      if (packageIdFromURL && packages.some(pkg => pkg.id === packageIdFromURL)) {
        setValue("packageId", packageIdFromURL);
      } else {
        // Otherwise use the first package as default
        setValue("packageId", packages[0].id);
      }
    }
  }, [packages, packageIdFromURL, setValue]);

  // Navigate directly to package selection step if packageId is provided in URL
  useEffect(() => {
    if (packageIdFromURL && currentStep === 0) {
      // If we have a package from URL, we can skip ahead to the package step
      // Find index of the package step
      const packageStepIndex = FORM_STEPS.findIndex(step => step.name === "package");
      if (packageStepIndex > 0) {
        // Uncomment this if you want to automatically skip to package selection
        // But for now, let's keep the normal flow
        // setCurrentStep(packageStepIndex);
      }
    }
  }, [packageIdFromURL, currentStep]);

  useEffect(() => {
    setShowOtherField(companyType === "other");
  }, [companyType]);

  const handleNext = async () => {
    // Validate current step fields
    const currentStepFields = FORM_STEPS[currentStep].fields;
    const isValid = await trigger(currentStepFields as Array<keyof RegistrationFormData>);
    
    if (isValid) {
      if (currentStep < FORM_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would make an API call to submit the form
      // For now we'll simulate success after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // You can use the data object here if needed
      console.log('Form submitted successfully with data:', data);
      
      // Send confirmation email (would be handled by backend)
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Registration failed", error);
      // Handle error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push(Routes.public.event);
  };

  // Step progress indicator
  const renderStepProgress = () => (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        {FORM_STEPS.map((step, index) => (
          <div key={step.name} className="flex flex-col items-center">
            <div 
              className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 font-medium",
                index === currentStep 
                  ? "bg-[var(--attribute-block)] text-white border-[var(--attribute-block)]" 
                  : index < currentStep
                    ? "bg-[var(--b2b-lv1)] text-[var(--b2b-lv4)] border-[var(--b2b-lv3)]"
                    : "bg-gray-100 text-gray-400 border-gray-300"
              )}
            >
              {index < currentStep ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span className={clsx(
              "text-xs mt-1 text-white",
              index === currentStep ? "font-semibold" : "opacity-90"
            )}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute top-0 h-1 bg-gray-200 w-full"></div>
        <div 
          className="absolute top-0 h-1 bg-[var(--attribute-block)]" 
          style={{ width: `${(currentStep / (FORM_STEPS.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  // Render the current step content
  const renderCurrentStep = () => {
    const currentStepData = FORM_STEPS[currentStep];
    
    switch (currentStepData.name) {
      case "company":
        return (
          <StepCard title="Company Information" theme={theme}>
            <div className="space-y-4">
              <FormInput 
                id="companyName"
                label="Company Name"
                required
                placeholder="Enter company name"
                register={register}
                errors={errors}
              />

              <div>
                <label htmlFor="companyType" className="block text-sm font-medium mb-1 text-white">
                  Company Type <span className="text-red-300">*</span>
                </label>
                <select
                  id="companyType"
                  className={clsx(
                    "w-full rounded-md border px-4 py-2 bg-white/20 text-white",
                    errors.companyType ? "border-red-300" : "border-white/30"
                  )}
                  {...register("companyType", { required: "Company type is required" })}
                >
                  <option value="" className="bg-gray-800 text-white">Please select</option>
                  {companyTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-gray-800 text-white">
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.companyType && (
                  <p className="text-red-300 text-sm mt-1">{errors.companyType.message}</p>
                )}
              </div>

              {showOtherField && (
                <FormInput 
                  id="otherCompanyTypeDesc"
                  label="Please specify"
                  required={companyType === "other"}
                  placeholder="Specify company type"
                  register={register}
                  errors={errors}
                />
              )}

              <FormInput 
                id="taxId"
                label="Tax ID / Unified Business Number"
                optional
                placeholder="Enter tax ID if applicable"
                register={register}
                errors={errors}
              />
            </div>
          </StepCard>
        );

      case "attendee":
        return (
          <StepCard title="Attendee Information" theme={theme}>
            <div className="space-y-4">
              <FormInput 
                id="attendeeName"
                label="Name"
                required
                placeholder="Enter your name"
                register={register}
                errors={errors}
              />

              <FormInput 
                id="jobTitle"
                label="Job Title"
                optional
                placeholder="Enter job title"
                register={register}
                errors={errors}
              />

              <FormInput 
                id="phoneNumber"
                label="Phone Number"
                required
                placeholder="Enter phone number"
                register={register}
                errors={errors}
                type="tel"
              />

              <FormInput 
                id="email"
                label="Email"
                required
                placeholder="Enter email address"
                register={register}
                errors={errors}
                type="email"
              />
            </div>
          </StepCard>
        );

      case "package":
        return (
          <StepCard title="Package Selection" theme={theme}>
            <style>{radioStyles}</style>
            <div className="space-y-4">
              {packages.map((pkg) => {
                const isSelected = selectedPackage === pkg.id;
                
                return (
                  <div 
                    key={pkg.id} 
                    className={clsx(
                      "flex items-start p-4 border rounded-md cursor-pointer package-option",
                      isSelected ? "selected border-[var(--b2b-lv3)]" : "border-white/30 bg-white/10"
                    )}
                    onClick={() => setValue("packageId", pkg.id)}
                  >
                    <div className="custom-radio">
                      <input
                        type="radio"
                        id={pkg.id}
                        value={pkg.id}
                        checked={isSelected}
                        {...register("packageId", { required: "Please select a package" })}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setValue("packageId", pkg.id);
                          }
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <label 
                        htmlFor={pkg.id} 
                        className="font-medium text-white cursor-pointer block"
                      >
                        {pkg.name} - {pkg.price}
                      </label>
                      <div className="mt-1 text-sm text-white/90">
                        {Array.isArray(pkg.description) ? (
                          <ul className="list-disc pl-5">
                            {pkg.description.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{pkg.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {errors.packageId && (
                <p className="text-red-300 text-sm mt-1">{errors.packageId.message}</p>
              )}
              
              {packageIdFromURL && (
                <p className="text-white text-sm mt-4">
                  <span className="text-[var(--b2b-lv3)] mr-1">*</span>
                  <span className="font-medium">Note:</span> This package was pre-selected based on your previous choice.
                </p>
              )}
            </div>
          </StepCard>
        );

      case "payment":
        return (
          <StepCard title="Payment Method" theme={theme}>
            <style>{radioStyles}</style>
            <div className="space-y-4">
              <div 
                className={clsx(
                  "flex items-center p-3 border rounded-md cursor-pointer package-option",
                  watch("paymentMethod") === "credit_card" 
                    ? "selected border-[var(--b2b-lv3)]" 
                    : "border-white/30 bg-white/10"
                )}
                onClick={() => setValue("paymentMethod", "credit_card")}
              >
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="credit_card"
                    value="credit_card"
                    checked={watch("paymentMethod") === "credit_card"}
                    {...register("paymentMethod", { required: "Payment method is required" })}
                  />
                </div>
                <label htmlFor="credit_card" className="ml-2 text-white cursor-pointer">
                  Credit Card
                </label>
              </div>
              
              <div 
                className={clsx(
                  "flex items-center p-3 border rounded-md cursor-pointer package-option",
                  watch("paymentMethod") === "atm_transfer" 
                    ? "selected border-[var(--b2b-lv3)]" 
                    : "border-white/30 bg-white/10"
                )}
                onClick={() => setValue("paymentMethod", "atm_transfer")}
              >
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="atm_transfer"
                    value="atm_transfer"
                    checked={watch("paymentMethod") === "atm_transfer"}
                    {...register("paymentMethod", { required: "Payment method is required" })}
                  />
                </div>
                <label htmlFor="atm_transfer" className="ml-2 text-white cursor-pointer">
                  ATM Transfer
                </label>
              </div>
              
              {errors.paymentMethod && (
                <p className="text-red-300 text-sm mt-1">{errors.paymentMethod.message}</p>
              )}
            </div>
          </StepCard>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {renderStepProgress()}
      
      {renderCurrentStep()}

      <div className="mt-8 flex justify-between">
        {currentStep > 0 && (
          <div
            onClick={handlePrevious}
            className="flex items-center space-x-2 text-white cursor-pointer group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform transition-transform group-hover:-translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium underline-offset-4 hover:underline">Previous</span>
          </div>
        )}
        
        <div className={currentStep === 0 ? "ml-auto" : ""}>
          {currentStep === FORM_STEPS.length - 1 ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-[var(--b2b-lv4)] hover:bg-[var(--b2b-lv5)] text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </button>
          ) : (
            <div
              onClick={handleNext}
              className="flex items-center space-x-2 text-white cursor-pointer group"
            >
              <span className="font-medium underline-offset-4 hover:underline">Next</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      </div>

      <RegistrationSuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleCloseModal} 
      />
    </form>
  );
}
