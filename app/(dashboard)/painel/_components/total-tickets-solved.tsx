import { TicketCheck } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTotalTicketsSolved } from "@/app/_data.access/tickets/get-total-tickets-solved";

const TotalTicketsSolved = async () => {
  const totalTicketsSolved = getTotalTicketsSolved();
  return (
    <SummaryCard>
      <SummaryCardTitle>Total de tickets resolvidos</SummaryCardTitle>
      <div className="flex items-center">
        <SummaryCardIcon>
          <TicketCheck />
        </SummaryCardIcon>
        <SummaryCardValue>{totalTicketsSolved}</SummaryCardValue>
      </div>
    </SummaryCard>
  );
};

export default TotalTicketsSolved;
