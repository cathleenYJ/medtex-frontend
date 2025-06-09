import { AxiosInstance } from "axios";
import { HttpMethod } from "./http-method";
import { API_ENDPOINTS } from "./endpoints";

import type {
  AuthResponse,
  BuyerContact,
  BuyerData,
  CompanyTypeOption,
  Conference,
  FilterOptionType,
  LoginUserInput,
  MedtexCategory,
  MedtexItem,
  PastEvent,
  RecommandedItem,
  RegistrationPageData,
  ScheduleDay,
  SellerData,
  Speaker,
  Startup,
  // New startup types
  StartupTeam,
  StartupRepresentative,
  StartupInvestment,
  StartupDetail,
  StartupProduct,
  StartupProfile,
  User,
} from "@/types";

// Add interface for user credentials
interface UserCredential {
  email: string;
  password: string;
  name?: string;
  role?: string;
  [key: string]: unknown;
}

export class FetchData {
  private method: HttpMethod;
  constructor(axios: AxiosInstance) {
    this.method = new HttpMethod(axios);
  }
  users = {
    me: () => this.method.get<User>(API_ENDPOINTS.USERS_ME),
    login: async (input: LoginUserInput) => {
      try {

        // Get all credentials
        const creds = await this.method.get<UserCredential[]>(API_ENDPOINTS.USERS_LOGIN);

        // Find matching credential - case insensitive email comparison
        const matchedUser = creds.find(
          (cred) =>
            cred.email.toLowerCase() === input.email.toLowerCase() &&
            cred.password === input.password
        );

        // If user found, return login token from authData
        if (matchedUser) {
          try {
            const loginData = await this.method.get<AuthResponse>(API_ENDPOINTS.AUTH_DATA);

            // Create a complete response by merging login data first, then overriding with user data when needed
            return {
              ...loginData,
              // Override or provide fallbacks for required fields
              access_token: loginData.access_token || "mock-token-12345",
              name: matchedUser.name || matchedUser.email.split('@')[0],
              role: matchedUser.role || "user",
            };
          } catch (authError) {
            console.error("Error fetching auth data:", authError);
            // If auth data fails, create a mock token to allow login
            return {
              access_token: "mock-token-12345",
              name: matchedUser.name || matchedUser.email.split('@')[0],
              role: matchedUser.role || "user"
            };
          }
        }

        // If not found, return error with more details
        throw new Error("Invalid credentials. Please check your email and password.");
      } catch (error) {
        console.error("Login process error:", error);
        throw error;
      }
    },
    logout: () => this.method.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    data: () => this.method.get<{ data: number[] }>(API_ENDPOINTS.USERS_DATA),
  };
  buyers = {
    data: (id?: number) =>
      this.method.get<BuyerData[]>(
        `${API_ENDPOINTS.BUYERS_DATA}${id ? `?id=${id}` : ""}`
      ),
    contact: (id?: number) =>
      this.method.get<BuyerContact[]>(
        `${API_ENDPOINTS.BUYERS_CONTACT}${id ? `?id=${id}` : ""}`
      ),
  };
  sellers = {
    data: (id?: number) =>
      this.method.get<SellerData[]>(
        `${API_ENDPOINTS.SELLERS_DATA}${id ? `?id=${id}` : ""}`
      ),
  };
  basic = {
    filterOptions: () =>
      this.method.get<FilterOptionType>(API_ENDPOINTS.FILTER_OPTIONS),
    recommended: () =>
      this.method.get<RecommandedItem[]>(API_ENDPOINTS.RECOMMENDED),
  };
  conference = {
    data: () => this.method.get<Conference>(API_ENDPOINTS.CONFERENCE),
  };
  speakers = {
    data: (id?: number) =>
      this.method.get<Speaker[]>(
        `${API_ENDPOINTS.SPEAKERS}${id ? `?id=${id}` : ""}`
      ),
  };
  startups = {
    // Legacy method for backward compatibility
    data: (id?: number) =>
      this.method.get<Startup[]>(
        `${API_ENDPOINTS.STARTUPS}${id ? `?id=${id}` : ""}`
      ),
    byCategory: (category: string) =>
      this.method.get<Startup[]>(
        `${API_ENDPOINTS.STARTUPS}?category=${category}`
      ),

    // New methods for the updated schema
    teams: {
      getAll: () => this.method.get<StartupTeam[]>(API_ENDPOINTS.STARTUP_TEAMS),
      getById: (id: number) =>
        this.method.get<StartupTeam>(`${API_ENDPOINTS.STARTUP_TEAMS}/${id}`),
      getByStatus: (status: "draft" | "published" | "archived") =>
        this.method.get<StartupTeam[]>(`${API_ENDPOINTS.STARTUP_TEAMS}?status=${status}`),
    },

    representatives: {
      getByTeamId: (teamId: number) =>
        this.method.get<StartupRepresentative[]>(`${API_ENDPOINTS.STARTUP_REPRESENTATIVES}?team_id=${teamId}`),
    },

    investments: {
      getByTeamId: (teamId: number) =>
        this.method.get<StartupInvestment>(`${API_ENDPOINTS.STARTUP_INVESTMENTS}?team_id=${teamId}`),
    },

    details: {
      getByTeamId: (teamId: number) =>
        this.method.get<StartupDetail>(`${API_ENDPOINTS.STARTUP_DETAILS}?team_id=${teamId}`),
    },

    products: {
      getByTeamId: (teamId: number) =>
        this.method.get<StartupProduct[]>(`${API_ENDPOINTS.STARTUP_PRODUCTS}?team_id=${teamId}`),
      getByCategory: (category: "drug" | "device" | "service") =>
        this.method.get<StartupProduct[]>(`${API_ENDPOINTS.STARTUP_PRODUCTS}?category=${category}`),
    },

    // Get complete startup profile in one call
    getProfile: (teamId: number) =>
      this.method.get<StartupProfile>(`${API_ENDPOINTS.STARTUP_TEAMS}/${teamId}/profile`),
  };
  schedule = {
    data: () => this.method.get<ScheduleDay[]>(API_ENDPOINTS.SCHEDULE),
  };
  pastEvents = {
    data: () => this.method.get<PastEvent[]>(API_ENDPOINTS.PAST_EVENTS),
  };
  medtex = {
    items: (id?: number) =>
      this.method.get<MedtexItem[]>(
        `${API_ENDPOINTS.MEDTEX_ITEMS}${id ? `?id=${id}` : ""}`
      ),
    categories: () =>
      this.method.get<MedtexCategory[]>(API_ENDPOINTS.MEDTEX_CATEGORIES),
    itemsByCategory: (categoryId: number) =>
      this.method.get<MedtexItem[]>(
        `${API_ENDPOINTS.MEDTEX_ITEMS}?category=${categoryId}`
      ),
  };
  registration = {
    data: () => this.method.get<RegistrationPageData>(API_ENDPOINTS.REGISTRATION),
    companyTypes: () => this.method.get<CompanyTypeOption[]>(API_ENDPOINTS.COMPANY_TYPES),
  };
}
