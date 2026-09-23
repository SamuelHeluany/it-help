"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createClient } from "@/lib/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { Spinner } from "./ui/spinner";

export function SignUpForm({}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "/painel",
        },
      });
      if (error) throw error;
      router.push("/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-150 h-175 hidden lg:block">
        <Image
          src="/it-help-image-login.jpg"
          alt="Ilustração do Login de Suporte"
          fill
          className="object-cover rounded-l-lg" // Preenche todo o espaço sem deformar
          priority
        />
      </div>

      <div className="md:w-150 md:h-175 w-80 h-110 rounded-r-lg bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)] md:py-40">
        <div className="w-full md:p-5 grid md:mx-19 mx-5 my-5">
          <h2 className="text-2xl">Crie sua conta</h2>
          <p className="text-sm text-gray-400 md:w-100 w-70">
            Crie sua conta ou entre com um email e senha.
          </p>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col gap-6 items-center">
            <div className="grid gap-2 px-10">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                className="text-[#757575] md:w-100 w-70"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input
                id="password"
                className="md:w-100 w-70"
                type="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="repeat-password">Repita a senha</Label>
              </div>
              <Input
                id="repeat-password"
                className="md:w-100 w-70"
                placeholder="Repita a senha"
                type="password"
                required
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className=" flex justify-center items-center md:w-100 w-70 h-8 text-white bg-[#6E6CDF] text-[16px] cursor-pointer hover:bg-[#716ffc] rounded-sm gap-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner className="h-5 w-4 items-center" /> Criando conta...
                </>
              ) : (
                "Criar conta"
              )}
            </button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 text-[#6E6CDF]"
            >
              Entre aqui!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
