export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/", "/dashboard", "/user"],
    // matcher: ["/((?!signup|signin|api/auth|api/personal/confirm-email|api/personal/email-login).*)"],
};