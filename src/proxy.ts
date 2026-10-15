import { NextResponse, type NextRequest } from "next/server";

const APEX = "devtoolio.tech";
const CANONICAL_HOST = `www.${APEX}`;

export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const requestHost = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const current = new URL(request.url);
  const normalizedPath =
    (current.pathname.length > 1 ? current.pathname.replace(/\/+$/, "") : current.pathname).toLowerCase();
  const onApex = requestHost === APEX;
  const onCanonical = requestHost === CANONICAL_HOST;
  const pathChanged = normalizedPath !== current.pathname;

  if (!onApex && !pathChanged) return NextResponse.next();

  const destination = new URL(request.url);
  destination.pathname = normalizedPath;
  destination.search = current.search;
  if (onApex || onCanonical) {
    destination.protocol = "https:";
    destination.hostname = CANONICAL_HOST;
    destination.port = "";
  }

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
