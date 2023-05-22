"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
    const { data: session } = useSession();
    const user = session?.user;
    console.log(session);
    return (
        <>
            <h2>Dashboard</h2>
            <Link href="/user">Go to user details</Link>
            <ul>
                <li className="cursor-pointer" onClick={() => signOut()}>Logout</li>
            </ul>
            <Link href="/signup">Sign Up</Link>
        </>
    );
}