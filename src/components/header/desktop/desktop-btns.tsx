"use client";

import dynamic from "next/dynamic";
import { Spinner } from "@ui/loading";

const AuthBtn = dynamic(() => import("@/components/auth/auth-btns").then((mod) => mod.AuthBtn), { ssr: false, loading: () => <Spinner /> });

export const DesktopBtns: React.FC = () => {
  return (
    <div className="hidden sm:block">
      <div className="flex items-end gap-6">
        <AuthBtn />
      </div>
    </div>
  );
};
