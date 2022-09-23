import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateSetoresDto } from './dto/create-setores.dto';
import { UpdateSetoresDto } from './dto/update-setores.dto';

@Injectable()
export class SetoresService {
  constructor(readonly prismaService: PrismaService){ }


  async create(data: CreateSetoresDto) {
    const setorExiste = await this.prismaService.setores.findFirst({
      where: {
        nome: data.nome,
      }
    })

    if(setorExiste){
      throw new ConflictException('setor já está cadastrado!')
    }

    const setor = this.prismaService.setores.create({
      data,
    });

    return setor;
  }

  async findAll() {
    const setores = await this.prismaService.setores.findMany();

    return setores;
  }

 async findOne(id: string) {
    const setor = await this.prismaService.setores.findFirst({ where: { id }});

    if(!setor){
      throw new ConflictException('Setor não está cadastrado!')
    }

    return setor;

  }

  update(id: string, data: UpdateSetoresDto) {
    const setor = this.findOne(id);

    if(!setor){
      throw new NotFoundException('Setor não encontrado no sistema');
    }

    return this.prismaService.setores.update({
      data,
      where: {
        id
      }
    })
  }

  remove(id: string) {
    const setor = this.findOne(id);

    if(!setor){
      throw new NotFoundException('Setor não encontrada no sistema');
    }

    return this.prismaService.setores.delete({ where: {id}});
  }
}
