"use client";

import dynamic from "next/dynamic";
import { LoadingBlock } from "@dashboard/loading-block";

const SignedIn = dynamic(() => import("@/components/auth/signed-in").then((mod) => mod.SignedIn), { ssr: false, loading: () => <LoadingBlock /> });

export default function UserAdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SignedIn checkToken>{children}</SignedIn>;
}
