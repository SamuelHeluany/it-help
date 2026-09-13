import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
import DropDownMenuUser from "@/components/navigation-menu-user";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/login");
  }

  return (
    <div className="w-full">
      <div className="w-full p-0 flex justify-between">
        <h1 className="text-black text-xl p-4">Bem vindo, </h1>
        <DropDownMenuUser />
      </div>
      <div className="w-full">
        <h1>Chamados</h1>
      </div>
    </div>
  );
}
