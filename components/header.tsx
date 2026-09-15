export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-between">{children}</div>
  );
};

export const HeaderLeft = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xs font-semibold text-slate-600">{children}</div>;
};
export const HeaderRight = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

export const HeaderSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items center gap-2">{children}</div>;
};
