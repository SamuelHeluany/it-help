"use client";

import { updateTicketStatus } from "@/app/_actions/tickets/update-ticket-status";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TicketCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface UpdateTicketStatusProps {
  id: string;
  status: string;
}

const UpdateTicketStatus = ({ id, status }: UpdateTicketStatusProps) => {
  // Função para mudar o status do ticket de aberto para resolvido e vice-versa, com ternario no toast
  const [open, setOpen] = useState(false);
  const handleUpdateStatusTicket = async () => {
    const nextStatus = status === "aberto" ? "resolvido" : "aberto";

    try {
      await updateTicketStatus({ id, status: nextStatus });
      setOpen(false);
      toast.success(
        status === "aberto"
          ? "O ticket foi finalizado com sucesso!"
          : "O ticket foi reaberto com sucesso!",
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        render={
          <button className="w-full flex pl-1 h-6 hover:bg-[#F5F5F5] rounded-sm items-center">
            <TicketCheck size={17} />
            <span className="text-sm pl-1.25">
              {/* ternátio no nome do button de acordo com status */}
              {status === "aberto" ? "Finalizar ticket" : "Reabrir ticket"}
            </span>
          </button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* ternatio no alert dialog de acordo com status */}
          <AlertDialogTitle>
            {status === "aberto"
              ? "Deseja finalizar o ticket?"
              : "Deseja reabrir o ticket?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {status === "aberto"
              ? "O ticket mudará seu status para RESOLVIDO!"
              : "O ticket mudará seu status para ABERTO!"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Não</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#5C64E1]"
            onClick={handleUpdateStatusTicket}
          >
            Sim
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateTicketStatus;
