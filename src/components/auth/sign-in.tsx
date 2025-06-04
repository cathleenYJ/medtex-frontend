"use client";

import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Field, Input, Label } from "@headlessui/react";
import { CustomButton } from "@ui/button";
import { useAuth } from "@/hooks/use-auth";
import { clientFetch } from "@/data/client";

type SignInProps = { onDismiss?: () => void };
export const SignIn: React.FC<SignInProps> = ({ onDismiss }) => {
  const pathname = usePathname();
  const { authorize, checkAuth } = useAuth();
  const [isPending, startTransition] = useTransition();
  const [account, setAccount] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleLogin = () => {
    startTransition(async () => {
      const { access_token, name, role } = await clientFetch.users.login(
        account
      );
      access_token && authorize({ name, role, token: access_token });
      onDismiss && onDismiss();
    });
  };
  const handleKeydown = (e: React.KeyboardEvent) =>
    e.key === "Enter" && handleLogin();
  useEffect(() => {
    checkAuth();
  }, [pathname]);
  return (
    <div className="w-full max-w-md px-4 text-white">
      <form>
        <Field className="my-3">
          <Label className="text-sm/6 font-medium">Email</Label>
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg bg-gray-200/20 py-1.5 px-3 text-sm/6",
              "data-[focus]:outline-blue-500",
              isPending && "cursor-not-allowed"
            )}
            onChange={handleChange}
            name="email"
            value={account.email}
            onKeyDown={handleKeydown}
          />
        </Field>
        <Field className="my-3">
          <Label className="text-sm/6 font-medium">Password</Label>
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg bg-gray-200/20 py-1.5 px-3 text-sm/6",
              "data-[focus]:outline-blue-500",
              isPending && "cursor-not-allowed"
            )}
            onChange={handleChange}
            name="password"
            value={account.password}
            onKeyDown={handleKeydown}
          />
        </Field>
        <CustomButton loading onClick={handleLogin}>
          Login In
        </CustomButton>
      </form>
    </div>
  );
};
