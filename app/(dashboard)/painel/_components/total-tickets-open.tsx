import { TicketPlus } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";

const TotalTicketsOpen = async () => {
  return (
    <SummaryCard>
      <SummaryCardTitle>Total de tickets abertos</SummaryCardTitle>
      <div className="flex items-center">
        <SummaryCardIcon>
          <TicketPlus />
        </SummaryCardIcon>
        <SummaryCardValue>20</SummaryCardValue>
      </div>
    </SummaryCard>
  );
};

export default TotalTicketsOpen;
