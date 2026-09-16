import z from "zod";

export const createTicketsSchema = z.object({
  id: z.uuid().optional(),
  title: z.string().trim().min(1, { message: "Título é obrigatório." }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Descrição é obrigatória." }),
  status: z.string(),
  created_by: z.uuid(),
});

export type CreateTicketsSchema = z.infer<typeof createTicketsSchema>;
