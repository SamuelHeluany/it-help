import { createClient } from "@/lib/server";

export const getTotalTicketsSolved = async () => {
  const tickets = await createClient();

  try {
    const { count, error } = await tickets
      .from("tickets")
      .select("*", { count: "exact", head: true })
      .eq("status", "resolvido");

    if (error) {
      console.error("Erro ao gerar total de tickets resolvidos", error);
      return 0;
    }
    return count ?? 0;
  } catch (error) {
    console.error("Erro ao gerar total de tickers resolvidos", error);
  }
};
