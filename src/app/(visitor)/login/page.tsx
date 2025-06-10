"use client";

import { SignIn } from "@/components/auth/sign-in";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import Head from "next/head";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthorized } = useAuth();
  
  // Redirect to the event page or specified redirect path if already authenticated
  useEffect(() => {
    if (isAuthorized) {
      const redirectTo = searchParams.get("redirect") || "/event";
      router.push(redirectTo);
    }
  }, [isAuthorized, router, searchParams]);

  // Anti-scraping script
  useEffect(() => {
    // Simple bot detection
    if (navigator.webdriver || (window as any).callPhantom || (window as any)._phantom || (window as any).__nightmare) {
      document.body.innerHTML = "";
    }
    
    // Disable right-click
    document.addEventListener("contextmenu", e => e.preventDefault());
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div data-home className="flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-md w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center text-white mb-6">Login</h1>
          <SignIn onDismiss={() => router.push("/event")} />
        </div>
      </div>
    </>
  );
}
