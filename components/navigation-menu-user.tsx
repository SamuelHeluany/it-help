import { Lock, User } from "lucide-react";
import { LogoutButton } from "./logout-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

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
            <NavigationMenuLink
              render={
                <Link href="/update-password">
                  <Lock />
                  Alterar senha
                </Link>
              }
            ></NavigationMenuLink>
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
