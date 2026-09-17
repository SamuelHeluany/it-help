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

interface DropdownMenuActionProps {
  ticket: {
    id: string;
    status: string;
  };
}

const DropdownMenuAction = async ({ ticket }: DropdownMenuActionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="ml-2"
        render={<Button className="w-7" variant="outline" />}
      >
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Edit />
            Editar
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
  );
};

export default DropdownMenuAction;
