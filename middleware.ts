import { authMiddleware } from "@clerk/nextjs";
import prisma from '@lib/database/prismadb'

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};