"use client";
import { LayoutGridIcon, Ticket } from "lucide-react";
import SidebarButton from "./sidebar-buttons";

export function AppSidebar() {
  return (
    <div className="p w-64 bg-[#5C64E1]">
      <div className="px-8 py-6">
        <a href="/painel">
          <span className="text-2xl font-bold flex justify-center">
            <p className="text-[#7CDBFD]">IT</p>
            <p className="text-white">-HELP</p>
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/painel">
          <div className="flex gap-2 items-center">
            <LayoutGridIcon color="#1D161E" />
            <p className="text-xl text-mauve-900">Painel</p>
          </div>
        </SidebarButton>

        <SidebarButton href="/tickets">
          <div className="flex gap-2 items-center">
            <Ticket color="#1D161E" />
            <p className="text-xl text-mauve-900">Tickets</p>
          </div>
        </SidebarButton>
      </div>
    </div>
  );
}
