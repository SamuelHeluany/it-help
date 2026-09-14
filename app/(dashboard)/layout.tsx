import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import DropDownMenuUser from "@/components/navigation-menu-user";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        {/* A Sidebar só existe AQUI dentro de (dashboard) */}
        <AppSidebar />
        <main className="w-full bg-gray-200">
          <div className="flex justify-end p-2">
            <DropDownMenuUser />
          </div>

          {children}
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
