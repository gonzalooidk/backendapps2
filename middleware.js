import { NextResponse } from 'next/server';
import  { NextRequest } from 'next/server';


export function middleware(req) {
  // checkeo en todas las peticiones si esta logueado si estoy en el dahsboard
  if(req.url.includes("/dashboard")) {  
    const cookie = req.cookies.get('server-key');
    if(cookie != "logued") {
        const {origin} = req.nextUrl;
        return NextResponse.redirect(`${origin}/`);
    }
  }
}

export const config = {
    matcher: ['/', '/dashboard/:path*'],
}