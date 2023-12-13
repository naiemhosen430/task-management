import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/join";
  const cookieStore = cookies();
  const accessToken = cookieStore.get("next-auth.session-token");

  if (isPublicPath && accessToken) {
    return NextResponse.redirect(new URL("/dashboad", request.nextUrl));
  }

  if (!isPublicPath && !accessToken) {
    return NextResponse.redirect(new URL("/join", request.nextUrl));
  }
}

export const config = {
  matcher: ["/join", "/dashboad"],
};
