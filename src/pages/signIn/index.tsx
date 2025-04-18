import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const schemaSignIn = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof schemaSignIn>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  const handleSignIn = async (data: SignInForm) => {
    try {
      console.log(data)

      authenticate({email: data.email})

      toast.success("Enviamos um link de autenticação para seu email", {
        action: {
          label: "Reenviar ",
          onClick: () => handleSignIn(data),
        },
      });
    } catch (error) {
      toast.error("Usuário não cadastrado");
    }
  };
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 ">
        <Button variant={"ghost"} className="absolute right-8 top-8" asChild>
          <Link to={"/sign-up"}>Novo estabelecimento</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4 ">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email", )} />
            </div>
            <Button disabled={isSubmitting} className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
