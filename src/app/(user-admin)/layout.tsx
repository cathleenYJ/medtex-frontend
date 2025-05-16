"use client";

import dynamic from "next/dynamic";
import { Loading } from "@ui/loading";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

const SignedIn = dynamic(() => import("@/components/auth/signed-in").then((mod) => mod.SignedIn), { ssr: false, loading: () => <Loading /> });

export default function UserAdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SignedIn checkToken>
      <Header />
      <div>UserAdminLayout</div>
      <div className="pt-32">{children}</div>
      <Footer />
    </SignedIn>
  );
}
