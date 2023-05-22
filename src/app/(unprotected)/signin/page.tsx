"use client";

import "../../globals.css";
import NextLink from "next/link";
import EmailLoginForm from "./form";

export default async function SignInPage() {
  return (
    <>
      <h2>Login to your account</h2>
      <EmailLoginForm />
      <span>Do not have an account?</span>
      <NextLink href="/signup">Sign up</NextLink>
    </>
  )
};