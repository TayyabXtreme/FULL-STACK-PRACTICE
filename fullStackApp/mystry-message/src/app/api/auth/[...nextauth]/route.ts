import NextAuth from "next-auth/next";

import { authOptions } from "./options";
import exp from "constants";

const handler=NextAuth(authOptions)

export { handler as GET, handler as POST }  
