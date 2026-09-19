import z from "zod";

export const updateTicketStatusSchema = z.object({
  id: z.uuid(),
  status: z.string(),
});

export type UpdateTicketStatusSchema = z.infer<typeof updateTicketStatusSchema>;
