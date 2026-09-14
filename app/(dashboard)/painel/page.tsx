import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/login");
  }

  return (
    <div className="w-full">
      <div className="w-full p-0 flex justify-between"></div>
      <div className="w-full">
        <h1>Chamados</h1>
      </div>
    </div>
  );
}
