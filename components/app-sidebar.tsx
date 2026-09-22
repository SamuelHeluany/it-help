"use client";
import { LayoutGridIcon, Menu, Ticket } from "lucide-react";
import SidebarButton from "./sidebar-buttons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function AppSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-200">
      <div className="fixed pl-4 pt-6 pb-2 bg-gray-200 w-full md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu size={25} />
          </SheetTrigger>
          <SheetContent side="left" className="min-h-screen bg-[#5C64E1]">
            <SheetHeader>
              <SheetTitle>
                <a href="/painel" className="grid justify-center items-center">
                  <span className="text-2xl md:text-2xl font-bold flex justify-center">
                    <span className="text-[#7CDBFD]">IT</span>
                    <span className="text-white">HELP</span>
                  </span>
                </a>
              </SheetTitle>
              <div className="flex flex-col p-2 gap-2">
                <SidebarButton href="/painel" onClick={() => setOpen(false)}>
                  <div className="flex gap-2 items-center justify-start">
                    <LayoutGridIcon color="#1D161E" />
                    <span className="text-xl text-mauve-900">Painel</span>
                  </div>
                </SidebarButton>
                <SidebarButton href="/tickets" onClick={() => setOpen(false)}>
                  <div className="flex gap-2 items-center justify-start">
                    <Ticket color="#1D161E" />
                    <span className="text-xl text-mauve-900">Tickets</span>
                  </div>
                </SidebarButton>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block md:w-64 min-h-screen transition-all duration-300 bg-[#5C64E1]">
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
    </div>
  );
}
