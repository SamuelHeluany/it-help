"use server";

import { createClient } from "@/lib/server";
import { createTicketsSchema, CreateTicketsSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const createTicketsAction = async (data: CreateTicketsSchema) => {
  const supabase = await createClient();
  const validatedData = createTicketsSchema.parse(data);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  try {
    await supabase
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
