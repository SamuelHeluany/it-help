import { createClient } from "@/lib/server";

export const getUser = async () => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return {
        user: null,
        error: error?.message || "Usuário não autenticado.",
      };
    }

    return { user, error: null };
  } catch (error) {
    console.error(error);
  }
};
