import { createClient } from "@/lib/server";

export const getTotalTicketsOpen = async () => {
  const tickets = await createClient();

  try {
    // count de total de tickets que estão com status aberto
    const { count, error } = await tickets
      .from("tickets")
      .select("*", { count: "exact", head: true })
      .eq("status", "aberto");

    if (error) {
      console.error("Erro ao gerar a quantidade de tickets abertos", error);
      return 0;
    }

    return count ?? 0;
  } catch (error) {
    console.error("Erro ao gerar total de tickers abertos.", error);
  }
};
