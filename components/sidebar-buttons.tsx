import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

interface SidebarButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const SidebarButton = ({ children, href, onClick }: SidebarButtonProps) => {
  // Deixar no sidebar o button selecionado na pagina que está
  const pathName = usePathname();
  return (
    <Button
      variant={pathName === `${href}` ? "siderbarHover" : "ghost"}
      className="justify-start gap-2 w-full cursor-pointer"
    >
      <Link href={href} className="w-full" onClick={onClick}>
        {children}
      </Link>
    </Button>
  );
};

export default SidebarButton;
