import { createClient } from "@/lib/server";
import "server-only";

export const getTickets = async () => {
  try {
    const supabase = await createClient();

    const { data: tickets, error } = await supabase.from("tickets").select("*");

    if (error) {
      console.error("Erro do Supabase ao buscar tickets:", error);
      return { data: null, error: error.message };
    }

    return { data: tickets, error: null };
  } catch (error) {
    console.error("Erro inesperado!", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
};
