"use client";

import '../../../globals.css'
import Link from 'next/link'

export default function PendingConfirmationPage() {
    return (
        <>
            <h2>Check your email</h2>
            <p>We sent a confirmation link to your email address!</p>
            <Link href="/signin">Back to log in</Link>
        </>
    );
}