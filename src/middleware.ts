import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
});

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Verificación de autenticación para las rutas del dashboard
  if (req.nextUrl.pathname.match(/^\/(en|es)\/dashboard\/.*/)) {
    if (!token) {
      const locale = req.nextUrl.pathname.split('/')[1]; // Obtener el idioma de la URL
      const loginUrl = new URL(`/${locale}/login`, req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Manejo de internacionalización
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/', '/(en|es)/:path*', '/(en|es)/dashboard/:path*'],
};