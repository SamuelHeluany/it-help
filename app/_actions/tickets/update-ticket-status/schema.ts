import z from "zod";

export const updateTicketStatusSchema = z.object({
  id: z.uuid(),
});

export type UpdateTicketStatusSchema = z.infer<typeof updateTicketStatusSchema>;
