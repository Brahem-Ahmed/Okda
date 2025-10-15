"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const LogoutButton = () => {
  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = '/login';
  };

  return (
    <Button onClick={handleLogout}>Sign Out</Button>
  );
};
