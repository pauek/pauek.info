
import { redirect } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  console.log("host", url.host);
  if (url.host === "pauek.info") {
    url.host = "pauek.dev";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

