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

export const metadata = {
  title: "Tickets",
};

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
    <div className="mt-15 w-full p-2 flex flex-col space-y-8 rounded-lg bg-gray-200 ">
      <div className="w-full bg-white rounded-lg p-4">
        <Header>
          <HeaderLeft>
            <HeaderTitle>Chamados</HeaderTitle>
            <HeaderSubtitle>Chamados criados</HeaderSubtitle>
          </HeaderLeft>
          <HeaderRight>
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
    </div>
  );
};

export default Tickets;
