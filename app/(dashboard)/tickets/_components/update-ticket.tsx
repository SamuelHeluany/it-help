"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  updateTicketSchema,
  UpdateTicketSchema,
} from "@/app/_actions/tickets/edit-ticket/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateTicket } from "@/app/_actions/tickets/edit-ticket";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { toast } from "sonner";

interface UpdateTicketProps {
  ticket: {
    id: string;
    title: string;
    description: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UpdateTicket = ({ ticket, open, onOpenChange }: UpdateTicketProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdateTicketSchema>({
    resolver: zodResolver(updateTicketSchema),
    defaultValues: {
      id: ticket.id,
      title: ticket.title,
      description: ticket.description,
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        id: ticket.id,
        title: ticket.title,
        description: ticket.description,
      });
    }
  }, [open, ticket, reset]);

  const onSubmit = async (data: UpdateTicketSchema) => {
    try {
      // Passa o objeto 'data' diretamente para a Server Action
      await updateTicket(data);
      reset();
      onOpenChange(false);
      toast.success("Ticket atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar ticket.", error);
      toast.error("Erro ao atualizar ticket.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Editar ticket</DialogTitle>
            <DialogDescription>
              Digite abaixo as novas informações do ticket.
            </DialogDescription>
          </DialogHeader>
          {/* Campo: Título */}
          <Field data-invalid={!!errors.title}>
            <FieldLabel htmlFor="title">Título</FieldLabel>
            <Input
              {...register("title")}
              placeholder="Informe o título do ticket..."
              autoComplete="off"
            />
            {errors.title && <FieldError errors={[errors.title]} />}
          </Field>

          {/* Campo: Descrição */}
          <Field data-invalid={!!errors.description}>
            <FieldLabel htmlFor="description">Descrição</FieldLabel>
            <Textarea
              {...register("description")}
              placeholder="Descreva o problema em detalhes..."
              autoComplete="off"
            />
            {errors.description && <FieldError errors={[errors.description]} />}
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#5C64E1] w-full text-white px-4 py-2 cursor-pointer rounded font-medium disabled:opacity-50 hover:bg-[#5157b1]"
          >
            {isSubmitting ? "Editando..." : "Editar ticket"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTicket;
