"use client";

import { clsx } from "clsx";
import { Field, Input, Label } from "@headlessui/react";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { clientFetch } from "@/data/client";
import { setAuthToken } from "@/data/client/token.utils";
import { useAuth } from "@/hooks/use-auth";
import { useModal } from "@/components/modals/context";
import { modal_views } from "@/components/modals/view";
import { CustomButton } from "@ui/button";

export const SignIn: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { authorize, checkAuth } = useAuth();
  const { openModal } = useModal();
  const [loading, setLoading] = useState<boolean>(false);
  const [account, setAccount] = useState<{ email: string; password: string }>({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleLogin = async () => {
    setLoading(true);
    const { access_token, message, name, role } = await clientFetch.users.login(account);
    const redirect = searchParams?.get("redirect");
    if (access_token) {
      setAuthToken(access_token);
      authorize({ name, role });
      router.push((redirect && redirect !== pathname && decodeURIComponent(redirect)) || "/");
    } else {
      openModal(modal_views.ERROR, message);
    }
    setLoading(false);
  };
  const handleKeydown = async (e: React.KeyboardEvent) => e.key === "Enter" && (await handleLogin());
  return (
    <>
      <div className="w-full max-w-md px-4 text-white">
        <form>
          <Field className="my-3">
            <Label className="text-sm/6 font-medium">Email</Label>
            <Input className={clsx("mt-3 block w-full rounded-lg bg-gray-200/20 py-1.5 px-3 text-sm/6", "data-[focus]:outline-blue-500", loading && "cursor-not-allowed")} onChange={handleChange} name="email" value={account.email} onKeyDown={handleKeydown} />
          </Field>
          <Field className="my-3">
            <Label className="text-sm/6 font-medium">Password</Label>
            <Input className={clsx("mt-3 block w-full rounded-lg bg-gray-200/20 py-1.5 px-3 text-sm/6", "data-[focus]:outline-blue-500", loading && "cursor-not-allowed")} onChange={handleChange} name="password" value={account.password} onKeyDown={handleKeydown} />
          </Field>
          <CustomButton loading onClick={handleLogin}>
            Login In
          </CustomButton>
        </form>
      </div>
    </>
  );
};
