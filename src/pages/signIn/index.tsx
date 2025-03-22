import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm} from 'react-hook-form'
import {z} from 'zod'

const signInSchema = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof  signInSchema>

const SignIn = () => {

  const {register, handleSubmit, formState : {isSubmitting} } =  useForm<SignInForm>();

  const handleSignIn =  (data : SignInForm) => {

    console.log(data)
   
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 ">
        <div className="w-[358px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2x1 font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>
          <form className="space-y-4 " onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail:</Label>
              <Input id={"email"} type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
