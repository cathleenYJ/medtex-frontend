import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  if (!request.cookies.has("token")) {
    return NextResponse.redirect(new URL(`/sign-in?redirect=${request.nextUrl.pathname}`, request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/admin/:path*",
};
