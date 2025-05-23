import { profile } from "console";

export const Routes = {
  auth: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
  public: {
    home: "/",
    result: "/result",
    profile: "/profile",
    notFound: "/404",
  },
  private: {
    admin: "/admin",
    form: "/admin/buyer-form",
  },
};
