import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/logout-button";
import { createClient } from "@/lib/server";
import DropDownMenuUser from "@/components/dropdown-menu-user";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/login");
  }

  return (
    <div className="flex justify-end w-full gap-2">
      <DropDownMenuUser />
    </div>
  );
}
