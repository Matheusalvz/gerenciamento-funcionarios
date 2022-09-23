import { PartialType } from '@nestjs/mapped-types';
import { CreateSetoresDto } from './create-setores.dto';

export class UpdateSetoresDto extends PartialType(CreateSetoresDto) {
    id: string;
    nome: string;
    telefone: string;
    email: string;
    id_empresa: string;
}
