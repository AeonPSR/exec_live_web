import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("Middleware executed for:", req.nextUrl.pathname)
    console.log("User token:", req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Return true if user has a valid token, false otherwise
        return !!token
      },
    },
    pages: {
      signIn: '/auth/signin',
    },
  }
)

// Specify which routes should be protected
export const config = {
  matcher: ['/posts/new']
}