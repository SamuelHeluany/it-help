import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DropdownMenuAction from "./dropdownmenu-action";
import { getTickets } from "@/app/_data.access/tickets/get-tickets";

const TableColumn = async () => {
  // map dos tickets apresentados em tela
  const { data: tickets } = await getTickets();

  return (
    <Table>
      <TableCaption>Lista de chamados</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-100">ID</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Data de criação</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets?.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell className="font-medium">{ticket.id}</TableCell>
            <TableCell>{ticket.title}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger
                  render={
                    <button className="bg-[#5C64E1] text-white w-30 h-7 rounded-sm cursor-pointer hover:bg-[#4854f8]">
                      Ver descrição
                    </button>
                  }
                />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Descrição do ticket</DialogTitle>
                    <DialogDescription>{ticket.description}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell>{ticket.status}</TableCell>
            <TableCell>
              {new Date(ticket.created_at).toLocaleDateString("pt-BR")}
            </TableCell>
            <TableCell>
              <DropdownMenuAction ticket={ticket} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableColumn;
