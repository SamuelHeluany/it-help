import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cog, User } from "lucide-react";
import { LogoutButton } from "./logout-button";

const DropDownMenuUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="w-36"
        render={<Button variant="secondary" />}
      >
        <User />
        Minha conta
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Cog />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenuUser;
