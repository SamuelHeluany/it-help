import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
import {
  Header,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "@/components/header";
import TotalTickets from "./_components/total-tickets";
import TotalTicketsOpen from "./_components/total-tickets-open";
import TotalTicketsSolved from "./_components/total-tickets-solved";
import CreateTicket from "../tickets/_components/create-ticket";
import { Lock, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import LoadingFallback from "../tickets/_components/loading-fallback";

export const metadata = {
  title: "Painel",
};

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="mt-20 mr-3 ml-3 mb-3flex flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Painel</HeaderTitle>
          <HeaderSubtitle>Visão geral dos tickets.</HeaderSubtitle>
        </HeaderLeft>
      </Header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Suspense fallback={<LoadingFallback />}>
          <TotalTickets />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TotalTicketsOpen />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TotalTicketsSolved />
        </Suspense>
      </div>

      <Header>
        <HeaderLeft>
          <HeaderTitle>Ações rápidas</HeaderTitle>
        </HeaderLeft>
      </Header>

      <div className="gap-2 flex">
        <CreateTicket userId={user?.id}>
          <span className="bg-blue-950 flex text-white md:w-30 md:h-10 items-center cursor-pointer rounded-sm justify-center hover:bg-blue-800 w-25 h-8 text-sm gap-0.5">
            <Plus className="w-4 h-4 md:h-4.5 md:w-4.5" />
            Criar ticket
          </span>
        </CreateTicket>
        <Link href="/update-password" className="flex gap-1">
          <button className="bg-blue-950 flex text-white md:w-30 md:h-10 items-center cursor-pointer rounded-sm justify-center hover:bg-blue-800 w-25 h-8 text-sm gap-0.5">
            <Lock className="w-4 h-4 md:h-4.5 md:w-4.5" />
            <p className="text-[12px] lg:text-sm">Alterar senha</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
