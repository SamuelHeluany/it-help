import z from "zod";

export const updateTicketSchema = z.object({
  id: z.uuid(),
  title: z.string().trim().min(1, { message: "O título é obrigatório." }),
  description: z
    .string()
    .trim()
    .min(1, { message: "A descrição é obrigatória." }),
});

export type UpdateTicketSchema = z.infer<typeof updateTicketSchema>;
