import { countries } from "@/data/countries";

export type BuyerForm = {
  promotion_text: string;
  company_name: string;
  company_logo: File;
  company_description: string;
  company_location: string;
  company_established_year: number;
  business_annual_revenue: number;
  business_capital_amount: number;
  number_of_employees: number;
  company_website: string;
  business_attributes: string[];
  industry_classification: string[];
  partnership_looking_for: string[];
  purchasing_requirement: string[];
  required_certification: string;
  market_channel_overview: string;
  company_strengths: string;
  estimated_procurement_amount: number;
  brands_in_distribution: string;
  buyer_name: string;
  buyer_job_title: string;
  brief_introduction: string;
  buyer_photo: File;
};

export type CustomFieldProps = {
  group: string;
  label: string;
  type: string;
  name: keyof BuyerForm;
  options?: string[];
  required?: boolean;
};

export const fields: CustomFieldProps[] = [
  {
    group: "A",
    label: "Company Name",
    type: "text",
    name: "company_name",
    required: true,
  },
  {
    group: "A",
    label: "Company Logo",
    type: "image",
    name: "company_logo",
    required: true,
  },
  {
    group: "A",
    label: "Company Business Description",
    type: "text",
    name: "company_description",
    required: true,
  },
  {
    group: "A",
    label: "Company Location (country)",
    type: "select",
    name: "company_location",
    required: true,
    options: countries.map((country) => country.label),
  },
  {
    group: "A",
    label: "When was your company established?",
    type: "number",
    name: "company_established_year",
    required: true,
  },
  {
    group: "A",
    label: "Business Size by Annual Revenue Amount",
    type: "number",
    name: "business_annual_revenue",
    required: true,
  },
  {
    group: "A",
    label: "Business Size by Capital Amount",
    type: "number",
    name: "business_capital_amount",
    required: true,
  },
  {
    group: "A",
    label: "Number of Employees",
    type: "number",
    name: "number_of_employees",
    required: true,
  },
  {
    group: "A",
    label: "Company Website",
    type: "text",
    name: "company_website",
    required: true,
  },
  {
    group: "A",
    label: "Business Attributes",
    type: "checkbox",
    name: "business_attributes",
    required: true,
  },
  {
    group: "A",
    label: "Nature of Business",
    type: "checkbox",
    name: "industry_classification",
    required: true,
  },
  {
    group: "A",
    label: "What kind of partnership are you looking for?",
    type: "checkbox",
    name: "partnership_looking_for",
    required: true,
    options: ["test1", "test2", "test3"],
  },
  {
    group: "A",
    label: "Purchasing Requirement",
    type: "checkbox",
    name: "purchasing_requirement",
    required: true,
  },
  {
    group: "A",
    label: "Required Certification",
    type: "text",
    name: "required_certification",
    required: true,
  },
  {
    group: "A",
    label: "Market Channel Overview",
    type: "text",
    name: "market_channel_overview",
    required: true,
  },
  {
    group: "A",
    label: "Company Strentghs",
    type: "text",
    name: "company_strengths",
    required: true,
  },
  {
    group: "A",
    label: "Estimated Procurement Amount",
    type: "number",
    name: "estimated_procurement_amount",
    required: true,
  },
  {
    group: "A",
    label: "Brands in Distribution",
    type: "text",
    name: "brands_in_distribution",
    required: true,
  },
  {
    group: "A",
    label: "Your Name",
    type: "text",
    name: "buyer_name",
    required: true,
  },
  {
    group: "A",
    label: "Your Job Tttle",
    type: "text",
    name: "buyer_job_title",
    required: true,
  },
  {
    group: "A",
    label: "Brief Introduction",
    type: "text",
    name: "brief_introduction",
    required: true,
  },
  {
    group: "A",
    label: "Buyer's photo",
    type: "image",
    name: "buyer_photo",
    required: true,
  },
];
