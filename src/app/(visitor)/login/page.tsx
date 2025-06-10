"use client";

import { SignIn } from "@/components/auth/sign-in";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import Head from "next/head";

// Component that handles the login form rendering
const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  return (
    <SignIn onDismiss={() => router.push(redirect)} />
  );
};

// Component that handles auth redirection
const AuthRedirect = () => {
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

  return null; // This component doesn't render anything
};

export default function LoginPage() {
  // Anti-scraping script
  useEffect(() => {
    // Simple bot detection
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          
          {/* Wrap all useSearchParams usages in Suspense boundaries */}
          <Suspense fallback={<div>Checking authorization status...</div>}>
            <AuthRedirect />
          </Suspense>
          
          <Suspense fallback={<div>Loading login form...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </>
  );
}
