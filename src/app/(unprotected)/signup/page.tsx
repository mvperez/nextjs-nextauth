"use client";

import "../../globals.css";
import Link from 'next/link';

async function createIndividual(event: any) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch('/api/personal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result) {
        // ideally this should use a redirect('/signup/pending_confirmation'), but because currenty it's client side that is why we can't use next/navigation module.
        window.location.href = ('/signup/pending_confirmation');
    }
}

export default function SignUpPage() {
    // In the future, it will be migrated to using Server Actions (alpha at this time of writing) https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
    return (
        <>
            <h2>Create an account</h2>
            <form onSubmit={createIndividual} method='post'>
                <input type="text" name="first_name" placeholder="First Name" required></input> <br />
                <input type="text" name="last_name" placeholder="Last Name" required></input> <br />
                <input type="text" name="email" placeholder="Email" required></input> <br />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?<Link href="/signin">Sign in</Link></p>
            <p><Link href="/">Back to dashboard</Link></p>
        </>
    );
}