export type BuyerData = {
  id: number;
  profile_theme: "green" | "blue" | "red";
  user_name: string;
  promotion_text: string;
  company_name: string;
  company_logo: string;
  company_description: string;
  company_location: string;
  company_established_year: number;
  company_overview: string;
  business_annual_revenue: number;
  business_capital_amount: number;
  number_of_employees: number;
  company_website: string;
  business_attributes: string[];
  business_nature: string[];
  industry_classification: string[];
  partnership_looking_for: string[];
  purchasing_requirement: string[];
  required_certification: string;
  market_channel_overview: string;
  company_strengths: string;
  estimated_procurement_amount: number;
  brands_in_distribution: string;
};

export type BuyerContact = {
  buyer_name: string;
  buyer_job_title: string;
  brief_introduction: string;
  buyer_contact_location: string;
  buyer_photo: string;
};
