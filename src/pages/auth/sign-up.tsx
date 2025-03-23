import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpSchema = z.object({
  restauranteName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();
  const navigate = useNavigate();

  const handleSignUp = async (data: SignUpForm) => {
    try {
      console.log(data);
      await new Promise((resolver) => setTimeout(resolver, 2000));
      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch (error) {
      toast.error("erro ao cadastrar restaurante");
    }
  };

  return (
    <>
      <Helmet title="LogadastroCadasin" />
      <div className="p-8 ">
        <Button asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="w-[358px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-1x1 font-semibold text-sm2q tracking-tight">
              Criar conta gratis
            </h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro</p>
          </div>
          <form className="space-y-4 " onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restauranteName">Nome do estabelecimento</Label>
              <Input
                id={"restauranteName"}
                type="text"
                {...register("restauranteName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id={"managerName"}
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail:</Label>
              <Input id={"email"} type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular:</Label>
              <Input id={"phone"} type="tel" {...register("phone")} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm loading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="underline underline-offset-4">
                Termos de Serviços
              </a>{" "}
              e{" "}
              <a href="#" className="underline underline-offset-4">
                Políticas de Privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
