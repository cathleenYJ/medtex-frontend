"use client";

import dynamic from "next/dynamic";
import { Loading } from "@ui/loading";

const SignedIn = dynamic(() => import("@/components/auth/signed-in").then((mod) => mod.SignedIn), { ssr: false, loading: () => <Loading /> });

export default function UserAdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SignedIn checkToken>{children}</SignedIn>;
}
