import {
  Header,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "@/components/header";
import TableColumn from "@/components/table-column";

const Tickets = () => {
  return (
    <div className="m-8 p-6 flex flex-col space-y-8 rounded-lg bg-white">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Chamados</HeaderTitle>
          <HeaderSubtitle>Chamados em aberto</HeaderSubtitle>
        </HeaderLeft>
      </Header>

      <div>
        <TableColumn />
      </div>
    </div>
  );
};

export default Tickets;
