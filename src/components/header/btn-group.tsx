import Link from "next/link";
import dynamic from "next/dynamic";
import { Loading } from "@ui/loading";
import { CustomButton } from "@ui/button";
import { useAuth } from "@/hooks/use-auth";

const SignedIn = dynamic(() => import("@/components/auth/signed-in").then((mod) => mod.SignedIn), { ssr: false, loading: () => <Loading /> });
const SignedOut = dynamic(() => import("@/components/auth/signed-out").then((mod) => mod.SignedOut), { ssr: false, loading: () => <Loading /> });

export const HeaderBtnsWeb: React.FC = () => {
  const { unauthorize } = useAuth();
  return (
    <div className="hidden sm:block">
      <SignedIn>
        <div className="flex items-end gap-6">
          <CustomButton className="px-6 py-3 bg-forth text-white rounded-sm text-sm" onClick={unauthorize}>
            登出
          </CustomButton>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-end gap-6">
          <CustomButton className="px-6 py-3 bg-forth text-white rounded-sm" component={Link} href="/sign-in">
            登入 / 註冊
          </CustomButton>
        </div>
      </SignedOut>
    </div>
  );
};
