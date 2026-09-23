import { Skeleton } from "@/components/ui/skeleton";
import SummaryCard, {
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "../../painel/_components/summary-card";

const LoadingFallback = () => {
  return (
    <SummaryCard>
      <SummaryCardTitle>
        <Skeleton className="mt-2 h-4 w-50" />
      </SummaryCardTitle>
      <div className="flex">
        <SummaryCardIcon>
          <Skeleton className="h-6 w-8 rounded-xl" />
        </SummaryCardIcon>
        <SummaryCardValue>
          <Skeleton className="mt-1.5 h-6 w-10 rounded-xl" />
        </SummaryCardValue>
      </div>
    </SummaryCard>
  );
};

export default LoadingFallback;
