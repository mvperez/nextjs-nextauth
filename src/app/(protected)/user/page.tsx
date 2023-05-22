import { getServerSession } from "next-auth";
import NextLink from "next/link";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function UserPage() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    console.log("UserPage() Session User Email => " + user?.email);
    return (
        <>
            <h2>User Details</h2>
            <NextLink href="/">Back to dashboard</NextLink>
        </>
    );
}