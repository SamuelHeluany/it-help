import { TicketPlus } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTotalTicketsOpen } from "@/app/_data.access/tickets/get-total-tickets-open";

const TotalTicketsOpen = async () => {
  const totalTicketsOpen = await getTotalTicketsOpen();
  return (
    <SummaryCard>
      <SummaryCardTitle>Total de tickets abertos</SummaryCardTitle>
      <div className="flex items-center">
        <SummaryCardIcon>
          <TicketPlus />
        </SummaryCardIcon>
        <SummaryCardValue>{totalTicketsOpen}</SummaryCardValue>
      </div>
    </SummaryCard>
  );
};

export default TotalTicketsOpen;
