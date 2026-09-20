"use server";
import { createClient } from "@/lib/server";
import { DeleteTicketSchema, deleteTicketSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deleteTicket = async ({ id }: DeleteTicketSchema) => {
  const tickets = await createClient();
  deleteTicketSchema.parse({ id });

  try {
    // passa o delete do ticket por ID
    const { error } = await tickets.from("tickets").delete().eq("id", id);

    if (error) {
      console.error("Erro supabase ao deletar", error.message);
      return { success: false, error: error.message };
    }
    revalidatePath("/tickets");
  } catch (error) {
    console.error("Erro inesperado ao deletar ticket:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Erro desconhecido ao deletar ticket.",
    };
  }
};
