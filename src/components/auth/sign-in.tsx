"use client";

import { clsx } from "clsx";
import { useState, useTransition } from "react";
import { Field, Input, Label } from "@headlessui/react";
import { CustomButton } from "@ui/button";
import { useAuth } from "@/hooks/use-auth";
import { clientFetch } from "@/data/client";

// Add an interface for the error object
interface LoginError {
  message?: string;
  [key: string]: unknown;
}

type SignInProps = { onDismiss?: () => void };
export const SignIn: React.FC<SignInProps> = ({ onDismiss }) => {
  const { authorize } = useAuth();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [account, setAccount] = useState<{ email: string; password: string }>({
    email: "admin@example.com",
    password: "admin123",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  const handleLogin = () => {
    // Reset error state
    setError(null);

    // Validate inputs
    if (!account.email || !account.password) {
      setError("Email and password are required");
      return;
    }

    startTransition(async () => {
      try {
        const result = await clientFetch.users.login(account);

        if (result) {
          // Extract the necessary fields, providing defaults if they don't exist
          const token = result.access_token || "mock-token";
          const name = result.name || account.email.split('@')[0];
          const role = result.role || "user";
          
          authorize({ name, role, token });
          
          onDismiss && onDismiss();
        } else {
          console.error("Empty result from login");
          setError("Login failed. Please try again.");
        }
      } catch (err: unknown) {
        console.error("Login error:", err);
        // Type check before accessing properties
        const errorWithMessage = err as LoginError;
        setError(errorWithMessage?.message || "Invalid email or password");
      }
    });
  };
  
  const handleKeydown = (e: React.KeyboardEvent) =>
    e.key === "Enter" && handleLogin();

  return (
    <div className="w-full max-w-md px-4 text-white">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

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
            disabled={isPending}
            placeholder="admin@example.com"
            autoComplete="email"
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
            type="password"
            value={account.password}
            onKeyDown={handleKeydown}
            disabled={isPending}
            placeholder="admin123"
            autoComplete="current-password"
          />
        </Field>
        <div className="mt-4 text-xs text-gray-300">
          <p>Use the following credentials:</p>
          <p>Email: admin@example.com</p>
          <p>Password: admin123</p>
        </div>
        <CustomButton
          loading={isPending}
          onClick={handleLogin}
          className="mt-4 w-full"
        >
          {isPending ? "Logging In..." : "Login"}
        </CustomButton>
      </form>
    </div>
  );
};
