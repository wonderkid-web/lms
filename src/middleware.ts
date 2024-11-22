import { auth } from "@/../auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/auth/signin`, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth/signin|$).*)"],
};
