"use client";

import dynamic from "next/dynamic";
import { LoadingPage } from "@/pages/loading-page";

const SignedIn = dynamic(() => import("@/components/auth/signed-in").then((mod) => mod.SignedIn), { ssr: false, loading: () => <LoadingPage /> });

export default function UserAdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SignedIn checkToken>{children}</SignedIn>;
}
