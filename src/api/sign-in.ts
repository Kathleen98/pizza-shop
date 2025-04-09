import { api } from "@/lib/axios"

export interface SignIProps{
    email: string
}

export const signIn = async ({email} : SignIProps) => {
    await api.post('/authenticate', {email} )
}