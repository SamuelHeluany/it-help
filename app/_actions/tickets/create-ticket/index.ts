"use server";

import { createTicketsSchema, CreateTicketsSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/server";

export const createTicketsAction = async (data: CreateTicketsSchema) => {
  const tickets = await createClient();
  const {
    data: { user },
  } = await tickets.auth.getUser();
  if (!user) {
    return "Usuário não autenticado!";
  }

  const validatedData = createTicketsSchema.parse(data);

  try {
    await tickets
      .from("tickets")
      .insert({
        ...validatedData,
        created_by: user.id,
      })
      .select()
      .single();
  } catch (error) {
    console.error("Erro ao criar ticket no supabase", error);
  }
  revalidatePath("/tickets");
};
