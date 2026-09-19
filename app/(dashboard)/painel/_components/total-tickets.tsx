import { Tickets } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";

const TotalTickets = async () => {
  return (
    <SummaryCard>
      <SummaryCardTitle>Total de tickets</SummaryCardTitle>
      <div className="flex items-center">
        <SummaryCardIcon>
          <Tickets />
        </SummaryCardIcon>
        <SummaryCardValue>20</SummaryCardValue>
      </div>
    </SummaryCard>
  );
};

export default TotalTickets;
