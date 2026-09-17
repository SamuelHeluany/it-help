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

interface UpdateTicketStatusProps {
  id: string;
  status: string;
}

const UpdateTicketStatus = ({ id, status }: UpdateTicketStatusProps) => {
  const [open, setOpen] = useState(false);
  const handleUpdateStatusTicket = async () => {
    if (status === "resolvido") {
      return alert("Não pode resolver um ticket já resolvido!");
    }

    try {
      await updateTicketStatus({ id });
      setOpen(false);
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
            <span className="text-sm pl-1.25">Finalizar chamado</span>
          </button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja finalizar esse ticket?</AlertDialogTitle>
          <AlertDialogDescription>
            O ticket será colocado como RESOLVIDO!
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
