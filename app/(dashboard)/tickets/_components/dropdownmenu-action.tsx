"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, EllipsisVertical } from "lucide-react";
import DeleteTicket from "./delete-ticket";
import UpdateTicketStatus from "./update-ticket-status";
import UpdateTicket from "./update-ticket";
import { useState } from "react";

interface DropdownMenuActionProps {
  ticket: {
    id: string;
    status: string;
    title: string;
    description: string;
  };
}

const DropdownMenuAction = ({ ticket }: DropdownMenuActionProps) => {
  // dropdown menu de actions
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="ml-2"
          render={<Button className="w-7" variant="outline" />}
        >
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault(); // evita conflito de foco com o fechamento do menu
                setEditOpen(true);
              }}
            >
              <Edit size={17} />
              <span className="text-sm">Editar</span>
            </DropdownMenuItem>

            <DropdownMenuItem render={<DeleteTicket id={ticket.id} />} />
            <DropdownMenuSeparator />
            <DropdownMenuItem
              render={
                <UpdateTicketStatus id={ticket.id} status={ticket.status} />
              }
            />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <UpdateTicket
        ticket={ticket}
        open={editOpen}
        onOpenChange={setEditOpen}
      />
    </>
  );
};

export default DropdownMenuAction;
