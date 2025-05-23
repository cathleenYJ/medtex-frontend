import { NextResponse, type NextRequest } from "next/server";
import { Routes } from "@/config/routes";

export const middleware = async (request: NextRequest) => {
  if (!request.cookies.has("token") && request.nextUrl.pathname !== Routes.auth.signIn) {
    return NextResponse.redirect(new URL(`${Routes.auth.signIn}?redirect=${request.nextUrl.pathname}`, request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/admin/:path*",
};
