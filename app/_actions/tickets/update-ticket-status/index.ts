"use server";
import { revalidatePath } from "next/cache";
import { updateTicketStatusSchema, UpdateTicketStatusSchema } from "./schema";
import { createClient } from "@/lib/server";

export const updateTicketStatus = async ({
  id,
  status,
}: UpdateTicketStatusSchema) => {
  // update do status de aberto para resolvido e vice-versa
  const tickets = await createClient();
  updateTicketStatusSchema.parse({ id, status });

  try {
    const { error } = await tickets
      .from("tickets")
      .update({
        status: status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("Erro supabase", error);
      return {
        success: false,
        error: "Erro ao atualizar o ticket para RESOLVIDO!.",
      };
    }
    revalidatePath("/tickets");
    return { success: true };
  } catch (error) {
    console.error("Erro inesperado:", error);
    return {
      success: false,
      error: "Ocorreu um erro inesperado ao atualizar a tarefa.",
    };
  }
};
