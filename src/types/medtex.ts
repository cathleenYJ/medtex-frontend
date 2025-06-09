export type Conference = {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  themes?: string[];
  organizers?: string[];
  supporters?: string[];
  logo: string;
  expo_logo: string;
  background_image: string;
};

export type Speaker = {
  id: number;
  name: string;
  title: string;
  photo: string;
};

export type Startup = {
  id: number;
  name: string;
  description: string;
  presenter: string;
  presenter_title: string;
  photo: string;
  category: string;
};

export type ScheduleEvent = {
  time: string;
  title: string;
  type: "ceremony" | "keynote" | "break" | "fireside_chat" | "pitch_session" | "networking";
  speaker?: string;
  moderator?: string;
  host?: string;
  panelists?: string[];
  presenters?: string[];
};

export type ScheduleDay = {
  id: number;
  day: string;
  events: ScheduleEvent[];
};

export type MedtexItem = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  manufacturer: string;
  certification: string[];
  specifications: {
    [key: string]: string;
  };
  availability: boolean;
  createdAt: string;
  updatedAt: string;
};

export type MedtexCategory = {
  id: number;
  name: string;
  description: string;
  image: string;
  itemCount: number;
};

export type RegistrationPackage = {
  id: string;
  name: string;
  price: string;
  description: string | string[];
};

export type AgendaSection = {
  title: string;
  description: string;
  source?: string;
};

export type RegistrationNotes = {
  deadline: string;
  terms: string[];
};

export type PastEvent = {
  id: number;
  year: number;
  image: string;
  link: string;
};

export type RegistrationPageData = {
  packages: RegistrationPackage[];
  notes: RegistrationNotes;
};

export type CompanyType = 
  | "startup" 
  | "sme" 
  | "listed" 
  | "investor" 
  | "academic" 
  | "government" 
  | "other";

export type PaymentMethod = 
  | "credit_card" 
  | "atm_transfer";

export type RegistrationFormData = {
  // Company information
  companyName: string;
  companyType: CompanyType;
  taxId?: string; // Optional unified business number
  otherCompanyTypeDesc?: string; // Description if "other" is selected
  
  // Attendee information
  attendeeName: string;
  jobTitle?: string; // Optional
  phoneNumber: string;
  email: string;
  
  // Package selection
  packageId: string;
  
  // Payment
  paymentMethod: PaymentMethod;
};

export type RegistrationSubmitResponse = {
  success: boolean;
  registrationId?: string;
  message?: string;
};

export type CompanyTypeOption = {
  value: CompanyType;
  label: string;
};

// New startup types
export type StartupTeam = {
  id: number;
  name: string;
  logo: string;
  description: string;
  country: string;
  lead_investors: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
};

export type StartupRepresentative = {
  id: number;
  team_id: number;
  name: string;
  photo: string;
  title: string;
};

export type StartupInvestment = {
  id: number;
  team_id: number;
  year_founded: number;
  total_funding: string;
  annual_revenue: string;
  is_pre_revenue: boolean;
  funding_round: string;
  amount_raised: string;
  valuation: string;
  on_market: string;
};

export type StartupDetail = {
  id: number;
  team_id: number;
  investment_highlights: string;
  core_technology: string;
  target_market: string;
  milestones: string;
};

export type StartupProduct = {
  id: number;
  team_id: number;
  name: string;
  category: 'drug' | 'device' | 'service';
  stage: string;
  certificate_country: string;
};

// Combined type for a complete startup profile
export type StartupProfile = {
  team: StartupTeam;
  representatives: StartupRepresentative[];
  investment: StartupInvestment;
  details: StartupDetail;
  products: StartupProduct[];
};
