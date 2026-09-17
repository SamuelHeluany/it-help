"use client";

import { deleteTicket } from "@/app/_actions/tickets/delete-ticket";
import { DeleteTicketSchema } from "@/app/_actions/tickets/delete-ticket/schema";
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
import { Trash } from "lucide-react";

const DeleteTicket = ({ id }: DeleteTicketSchema) => {
  const handleDeleteTicket = async () => {
    if (!id) {
      return alert("Não foi possível identificar o ticket.");
    }
    try {
      await deleteTicket({ id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <button className="w-full flex pl-1 h-6 hover:bg-[#F5F5F5] rounded-sm items-center">
            <Trash size={17} />
            <span className="text-sm pl-1.25">Deletar</span>
          </button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja excluir este Ticket?</AlertDialogTitle>
          <AlertDialogDescription>
            Está ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Não</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#5C64E1]"
            onClick={handleDeleteTicket}
          >
            Sim
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTicket;
