import { ConfigValue } from "@/config";

export const API_ENDPOINTS = {
  USERS_ME: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/userProfile`,
  USERS_LOGIN: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/credentials`,
  USERS_LOGOUT: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/logout`,
  USERS_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/userData`,
  AUTH_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/authData`,
  BUYERS_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/buyers`,
  BUYERS_CONTACT: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/buyers_contact`,
  SELLERS_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/sellers`,
  FILTER_OPTIONS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/filter_options`,
  RECOMMENDED: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/recommended`,
  // New medtex endpoints
  CONFERENCE: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/conference`,
  SPEAKERS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/speakers`,
  STARTUPS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/startups`,
  SCHEDULE: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/schedule`,
  HIGHLIGHTS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/highlights`,
  PAST_EVENTS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/pastEvents`,
  MEDTEX_ITEMS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/medtex/items`,
  MEDTEX_CATEGORIES: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/medtex/categories`,
  REGISTRATION: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/registrationPage`,
  COMPANY_TYPES: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/companyTypes`,
  // Updated startup endpoints
  STARTUP_TEAMS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/startup_teams`,
  STARTUP_REPRESENTATIVES: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/startup_representatives`,
  STARTUP_INVESTMENTS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/startup_investments`,
  STARTUP_DETAILS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/startup_details`,
  STARTUP_PRODUCTS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/startup_products`,
};
