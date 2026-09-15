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
import { createClient } from "@/lib/server";
import DropdownMenuAction from "./dropdownmenu-action";

const TableColumn = async () => {
  const supabase = await createClient();

  const { data: tickets, error } = await supabase.from("tickets").select("*");

  if (error) {
    return <div>Erro ao carregar: {error.message}</div>;
  }
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
          <TableHead>Imagens em anexo</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets?.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell className="font-medium">{ticket.id}</TableCell>
            <TableCell>{ticket.titulo}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger
                  render={
                    <button className="bg-[#5C64E1] text-white w-30 h-7 rounded-sm cursor-pointer hover:bg-[#7982f5]">
                      Ver descrição
                    </button>
                  }
                />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Descrição do ticket</DialogTitle>
                    <DialogDescription>{ticket.descricao}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell>{ticket.status}</TableCell>
            <TableCell>
              {new Date(ticket.created_at).toLocaleDateString("pt-BR")}
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger
                  render={
                    <button className="bg-[#5C64E1] text-white w-30 h-7 rounded-sm cursor-pointer hover:bg-[#7982f5]">
                      Ver imagem
                    </button>
                  }
                />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Imagens em anexo</DialogTitle>
                    <DialogDescription>{ticket.imagens}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell>
              <DropdownMenuAction />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableColumn;
