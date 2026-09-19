import { TicketCheck } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";

const TotalTicketsSolved = async () => {
  return (
    <SummaryCard>
      <SummaryCardTitle>Total de tickets resolvidos</SummaryCardTitle>
      <div className="flex items-center">
        <SummaryCardIcon>
          <TicketCheck />
        </SummaryCardIcon>
        <SummaryCardValue>20</SummaryCardValue>
      </div>
    </SummaryCard>
  );
};

export default TotalTicketsSolved;
