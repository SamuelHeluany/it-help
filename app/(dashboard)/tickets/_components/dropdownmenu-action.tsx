import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, EllipsisVertical } from "lucide-react";
import DeleteTicket from "./delete-ticket";

interface DropdownMenuActionProps {
  ticket: {
    id: string;
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
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Edit />
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            render={<DeleteTicket id={ticket.id} />}
          ></DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuAction;
