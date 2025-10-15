import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";


export const requireUnAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (session) {
        redirect("/");
    }
    return session;
};

export const requireAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) {
        redirect("/login");
    }
    return session;
};