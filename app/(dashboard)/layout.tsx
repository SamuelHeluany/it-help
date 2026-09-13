import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
        <main className="w-full">{children}</main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
