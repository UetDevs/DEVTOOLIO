import { NextResponse, type NextRequest } from "next/server";

const APEX = "devtoolio.tech";

export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const requestHost = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const current = new URL(request.url);
  const normalizedPath =
    (current.pathname.length > 1 ? current.pathname.replace(/\/+$/, "") : current.pathname).toLowerCase();
  const onWww = requestHost === `www.${APEX}`;
  const onApex = requestHost === APEX;
  const pathChanged = normalizedPath !== current.pathname;

  if (!onWww && !pathChanged) return NextResponse.next();

  const destination = new URL(request.url);
  destination.pathname = normalizedPath;
  if (onWww || onApex) {
    destination.protocol = "https:";
    destination.hostname = APEX;
    destination.port = "";
  }

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
