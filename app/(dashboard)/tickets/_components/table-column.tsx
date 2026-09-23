import {
  Table,
  TableBody,
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
    <div className="w-full">
      <div className="flex flex-col gap-4 md:hidden">
        {tickets?.map((ticket) => (
          <div
            key={ticket.id}
            className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white"
          >
            <div className="flex justify-between pl-2 pt-2">
              <span className="text-[12px] flex items-center">
                Status: {ticket.status}
              </span>
              <DropdownMenuAction ticket={ticket} />
            </div>
            <div className="bg-gray-700 w-full border"></div>
            <div className="grid justify-start w-full ml-2 mr-2">
              <span className="text-[12px] gap-1 pr-2">
                Título:
                <p className="text-slate-600 text-[12px] pr-5 w-80 whitespace-normal wrap-break-word">
                  {ticket.title}
                </p>
              </span>
              <span className="text-[12px] mt-2 pr-2">
                Descrição:
                <p className="text-slate-600 text-[12px] pr-5 w-80 whitespace-normal wrap-break-word">
                  {ticket.description}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block max-h-150 overflow-y-auto w-full">
        <Table className="w-full relative">
          <TableHeader className="sticky top-0 bg-background z-10 shadow-sm">
            <TableRow>
              <TableHead className="hidden xl:table-cell">ID</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden xl:table-cell">
                Data de criação
              </TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets?.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="hidden xl:table-cell ">
                  {ticket.id}
                </TableCell>
                <TableCell className="max-w-37.5 sm:max-w-50 whitespace-normal wrap-break-word">
                  {ticket.title}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger
                      render={
                        <button className="bg-[#5C64E1] text-white w-30 h-7 rounded-sm cursor-pointer hover:bg-[#4854f8] whitespace-nowrap">
                          Ver descrição
                        </button>
                      }
                    />
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Descrição do ticket</DialogTitle>
                        <DialogDescription className="w-90 whitespace-normal wrap-break-word">
                          {ticket.description}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {ticket.status}
                </TableCell>
                <TableCell className="hidden lg:hidden xl:table-cell">
                  {new Date(ticket.created_at).toLocaleDateString("pt-BR")}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenuAction ticket={ticket} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableColumn;
