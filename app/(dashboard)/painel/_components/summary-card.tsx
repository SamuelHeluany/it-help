import { ReactNode } from "react";
// Criação do header

export const SummaryCard = ({ children }: { children: ReactNode }) => {
  return <div className="rounded-xl bg-white p-6">{children}</div>;
};

export const SummaryCardTitle = ({ children }: { children: ReactNode }) => {
  return <span className="text-sm font-medium text-slate-500">{children}</span>;
};

export const SummaryCardIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-opacity-10 text-emerald-500">
      {children}
    </div>
  );
};

export const SummaryCardValue = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-xl font-semibold text-slate-900">{children}</span>
  );
};

export default SummaryCard;
