"use client";
import { LayoutGridIcon, Ticket } from "lucide-react";
import SidebarButton from "./sidebar-buttons";

export function AppSidebar() {
  return (
    <div className="w-16 md:w-64 min-h-screen transition-all duration-300 bg-[#5C64E1]">
      <div className="px-2 md:px-8 py-6">
        <a href="/painel" className="grid justify-center items-center">
          <span className="text-sm grid md:text-2xl font-bold md:flex justify-center">
            <p className="text-[#7CDBFD]">IT</p>
            <p className="text-white">HELP</p>
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/painel">
          <div className="flex gap-2 items-center justify-center md:justify-start">
            <LayoutGridIcon color="#1D161E" className="shrink-0" />
            <p className="text-xl text-mauve-900 hidden md:block">Painel</p>
          </div>
        </SidebarButton>

        <SidebarButton href="/tickets">
          <div className="flex gap-2 items-center justify-center md:justify-start">
            <Ticket color="#1D161E" className="shrink-0" />
            <p className="text-xl text-mauve-900 hidden md:block">Tickets</p>
          </div>
        </SidebarButton>
      </div>
    </div>
  );
}
