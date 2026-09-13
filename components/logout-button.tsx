"use client";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <Button className="h-5 p-0 " variant="ghost" onClick={logout}>
      <LogOut />
      <p className="font-normal mr-20">Sair</p>
    </Button>
  );
}
