import 'server-only'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.SESSION_SECRET || 'fallback-secret-for-development'
const key = new TextEncoder().encode(secretKey)

const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'password',
}

const COOKIE_NAME = 'farm_fresh_session'

// Custom claims stored in the JWT: must be JSON-serializable (no Dates)
type JwtPayload = {
  userId: string
}

// Runtime session shape returned by getSession
export type SessionPayload = {
  userId: string
  expires: Date
}

export async function encrypt(payload: JwtPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key)
}

export async function decrypt(input: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    })

    // payload contains custom claims; standard claims (like `exp`) are present at runtime
    const anyPayload = payload as unknown as Record<string, unknown>
    const userId = anyPayload.userId as string | undefined
    const exp = anyPayload.exp as number | undefined

    if (!userId || !exp) return null

    return { userId, expires: new Date(exp * 1000) }
  } catch (error) {
    return null
  }
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
  const token = await encrypt({ userId })

    ; (await cookies()).set(COOKIE_NAME, token, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    })
}

export async function getSession() {
  const cookie = (await cookies()).get(COOKIE_NAME)?.value
  if (!cookie) return null

  const session = await decrypt(cookie)
  if (!session) return null

  return session
}

export async function deleteSession() {
  ; (await cookies()).delete(COOKIE_NAME)
}

export function verifyCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}
