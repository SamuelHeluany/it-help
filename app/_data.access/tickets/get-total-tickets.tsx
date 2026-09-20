import { createClient } from "@/lib/server";

export const getTotalTickets = async () => {
  const tickets = await createClient();

  try {
    const { count, error } = await tickets
      .from("tickets")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Erro ao gerar total de tickets.");
      return 0;
    }
    return count ?? 0;
  } catch (error) {
    console.error(error);
  }
};
