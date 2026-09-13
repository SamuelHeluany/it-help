import { Cog, User } from "lucide-react";
import { LogoutButton } from "./logout-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DropDownMenuUser = () => {
  return (
    <NavigationMenu className="pr-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-1  text-black">
            <User size={15} />
            Minha conta
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Cog />
              Configurações
            </NavigationMenuLink>
            <NavigationMenuLink>
              <LogoutButton />
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropDownMenuUser;
