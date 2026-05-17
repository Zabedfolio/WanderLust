import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()  // ← was missing
}

export const config = {
  matcher: [
    '/my-bookings',
    '/add-destination',
    '/destinations/:id'  // ← added *
  ],
}