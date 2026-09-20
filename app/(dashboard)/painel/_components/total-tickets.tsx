import { Tickets } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTotalTickets } from "@/app/_data.access/tickets/get-total-tickets";

const TotalTickets = async () => {
  const totalTickets = await getTotalTickets();
  return (
    <SummaryCard>
      <SummaryCardTitle>Total de tickets</SummaryCardTitle>
      <div className="flex items-center">
        <SummaryCardIcon>
          <Tickets />
        </SummaryCardIcon>
        <SummaryCardValue>{totalTickets}</SummaryCardValue>
      </div>
    </SummaryCard>
  );
};

export default TotalTickets;
