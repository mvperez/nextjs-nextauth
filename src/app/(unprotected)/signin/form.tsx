"use client";

// import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function EmailLoginForm() {
    //   const router = useRouter();
    //   const { callbackUrl } = router.query as { callbackUrl: string }; // Get the callbackUrl from the query params
    const callbackUrl = "http://localhost:3000";

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        await signIn("email", {
            ...data,
            callbackUrl, // Pass the callbackUrl to the signIn function
        });
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <input type="text" name="email" />
            <button type="submit">Sign In</button>
        </form>
    );
}