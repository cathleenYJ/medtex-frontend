// import { NextResponse, type NextRequest } from "next/server";
// import { Routes } from "@/config/routes";

// export const middleware = async (request: NextRequest) => {
//   if (!request.cookies.has("token") && request.nextUrl.pathname !== Routes.auth.signIn) {
//     return NextResponse.redirect(new URL(`${Routes.auth.signIn}?redirect=${request.nextUrl.pathname}`, request.url));
//   }
//   return NextResponse.next();
// };

// export const config = {
//   matcher: "/admin/:path*",
// };


import { NextResponse, type NextRequest } from "next/server";
import { Routes } from "@/config/routes";

export const middleware = async (request: NextRequest) => {
  // Define public paths that don't require authentication
  const publicPaths = ['/login', '/api', '/_next', '/favicon.ico', '/images'];
  
  // Check if the current path is a public path
  const isPublicPath = publicPaths.some(path => request.nextUrl.pathname.startsWith(path));
  
  // If the user is not authenticated and trying to access a protected route
  if (!request.cookies.has("token") && !isPublicPath) {
    return NextResponse.redirect(new URL(`/login?redirect=${request.nextUrl.pathname}`, request.url));
  }
  
  return NextResponse.next();
};

export const config = {
  // Apply middleware to all paths except static files
  matcher: '/((?!_next/static|_next/image|images|favicon.ico).*)',
};
