import { Setores } from "@prisma/client"

export class CreateEmpresaDto {

    id: string
    nome: string
    CNPJ: string
    telefone: string
    email: string
    endereco: string
    setores: Setores
}
