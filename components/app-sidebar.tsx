import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LayoutGridIcon, Ticket } from "lucide-react";

export function AppSidebar() {
  return (
    <div className="p w-64 bg-[#5C64E1]">
      <div className="px-8 py-6">
        <a href="/painel">
          <span className="text-4xl font-bold flex">
            <p className="text-[#7CDBFD]">IT</p>
            <p className="text-white">-HELP</p>
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-2 p-2 ">
        <SidebarMenuButton className="pb-3 cursor-pointer">
          <a href="/painel" className="flex w-full items-center text-xl gap-2">
            <LayoutGridIcon color="white" />
            <p className="text-white">Painel</p>
          </a>
        </SidebarMenuButton>

        <SidebarMenuButton className="pb-3 cursor-pointer">
          <a
            href="/tickets"
            className="flex w-full items-center text-[20px] gap-2"
          >
            <Ticket color="white" />
            <p className="text-white">Tickets</p>
          </a>
        </SidebarMenuButton>
      </div>
    </div>
  );
}
