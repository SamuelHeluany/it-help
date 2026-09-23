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

export const metadata = {
  title: "Painel",
};

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/login");
  }

  return (
    <div className="mt-20 mr-3 ml-3 mb-3flex flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Painel</HeaderTitle>
          <HeaderSubtitle>Visão geral dos tickets.</HeaderSubtitle>
        </HeaderLeft>
      </Header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TotalTickets />
        <TotalTicketsOpen />
        <TotalTicketsSolved />
      </div>
    </div>
  );
}
