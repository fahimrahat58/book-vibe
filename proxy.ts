import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/listed-book/:path*", "/pages-to-read/:path*","/profile/:path*"],
};
