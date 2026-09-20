"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Controller, useForm } from "react-hook-form";
import {
  CreateTicketsSchema,
  createTicketsSchema,
} from "@/app/_actions/tickets/create-ticket/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { createTicketsAction } from "@/app/_actions/tickets/create-ticket";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface CreateTicketProps {
  userId?: string;
  children: React.ReactNode; // Aceita o botão como filho
}

const CreateTicket = ({ userId, children }: CreateTicketProps) => {
  const [open, setOpen] = useState(false);
  // react hook form
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateTicketsSchema>({
    resolver: zodResolver(createTicketsSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "aberto",
      created_by: userId ?? "",
    },
  });

  const onSubmit = async (data: CreateTicketsSchema) => {
    // função para criar o ticket, passando o reset dos campos, fechando o modal e passando o toast de sucesso e erro quando der erro
    try {
      // Passa o objeto 'data' diretamente para a Server Action
      await createTicketsAction(data);
      reset();
      setOpen(false);
      toast.success("Ticket criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ticket:", error);
      toast.error("Erro ao criar ticket.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Criar ticket</DialogTitle>
            <DialogDescription>
              Digite abaixo as informações do ticket.
            </DialogDescription>
          </DialogHeader>
          {/* Campo: Título */}
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Título</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Ex: Botão de login não funciona"
                  autoComplete="off"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Campo: Descrição */}
          <Controller
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Descrição</FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Descreva o problema em detalhes..."
                  autoComplete="off"
                />
                <FieldDescription>
                  Forneça detalhes claros para ajudar na resolução.
                </FieldDescription>
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Campo Oculto: created_by */}
          <Controller
            name="created_by"
            control={control}
            render={({ field }) => <input type="hidden" {...field} />}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#5C64E1] w-full text-white px-4 py-2 cursor-pointer rounded font-medium disabled:opacity-50 hover:bg-[#5157b1]"
          >
            {isSubmitting ? "Enviando..." : "Criar Ticket"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTicket;
