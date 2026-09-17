import z from "zod";

export const deleteTicketSchema = z.object({
  id: z.uuid(),
});

export type DeleteTicketSchema = z.infer<typeof deleteTicketSchema>;
