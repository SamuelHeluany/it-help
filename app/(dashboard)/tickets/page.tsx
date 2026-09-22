import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "@/components/header";
import TableColumn from "@/app/(dashboard)/tickets/_components/table-column";
import { Plus } from "lucide-react";
import CreateTicket from "./_components/create-ticket";
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

const Tickets = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/login");
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="mt-20 ml-3 mr-3 mb-3 p-6 flex flex-col space-y-8 rounded-lg bg-white">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Chamados</HeaderTitle>
          <HeaderSubtitle>Chamados em aberto</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRight>
          {/* O CreateTicket envolve o botão que você já criou */}
          <CreateTicket userId={user?.id}>
            <span className="bg-blue-950 flex text-white md:w-30 md:h-10 items-center cursor-pointer rounded-sm justify-center hover:bg-blue-800 w-25 h-6 text-sm gap-0.5">
              <Plus className="w-4 h-4 md:h-4.5 md:w-4.5" />
              Criar ticket
            </span>
          </CreateTicket>
        </HeaderRight>
      </Header>
      <div>
        <TableColumn />
      </div>
    </div>
  );
};

export default Tickets;
