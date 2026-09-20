"use server";

import { createClient } from "@/lib/server";
import { updateTicketSchema, UpdateTicketSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const updateTicket = async (data: UpdateTicketSchema) => {
  const tickets = await createClient();
  updateTicketSchema.parse(data);

  try {
    // passa a edição do ticket (titulo, descrição e a data do update do ticket) por id
    const { error } = await tickets
      .from("tickets")
      .update({
        title: data.title,
        description: data.description,
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (error) {
      console.error("Erro supabase ao editar ticket", error);
      return {
        success: false,
        error: "Erro ao editar o ticket",
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
