import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "@/components/header";
import TableColumn from "@/app/(dashboard)/tickets/_components/table-column";
import { Plus } from "lucide-react";

const Tickets = () => {
  return (
    <div className="m-8 p-6 flex flex-col space-y-8 rounded-lg bg-white">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Chamados</HeaderTitle>
          <HeaderSubtitle>Chamados em aberto</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <button className="bg-blue-950 flex text-white w-30 h-10 items-center cursor-pointer rounded-sm justify-center hover:bg-blue-800 gap-1">
            <Plus size={18} />
            Criar ticket
          </button>
        </HeaderRight>
      </Header>

      <div>
        <TableColumn />
      </div>
    </div>
  );
};

export default Tickets;
