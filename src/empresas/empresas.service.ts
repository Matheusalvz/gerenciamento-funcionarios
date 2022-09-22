import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(readonly prismaService: PrismaService){ }

  async create(data: CreateEmpresaDto) {
    const empresaExiste = await this.prismaService.empresas.findFirst({
      where: {
        nome: data.nome,
      }
    })

    if(empresaExiste){
      throw new ConflictException('Empresa já está cadastrada!')
    }

    const empresa = this.prismaService.empresas.create({
      data,
    });

    return empresa;
  }

  async findAll() {
    const empresas = await this.prismaService.empresas.findMany();

    return empresas;
  }

 async findOne(id: string) {
    const empresa = await this.prismaService.empresas.findFirst({ where: { id }});

    if(!empresa){
      throw new ConflictException('Empresa não está cadastrada!')
    }

    return empresa;

  }

  update(id: string, data: UpdateEmpresaDto) {
    const empresa = this.findOne(id);

    if(!empresa){
      throw new NotFoundException('Empresa não encontrada no sistema');
    }

    return this.prismaService.empresas.update({
      data,
      where: {
        id
      }
    })
  }

  remove(id: string) {
    const empresa = this.findOne(id);

    if(!empresa){
      throw new NotFoundException('Empresa não encontrada no sistema');
    }

    return this.prismaService.empresas.delete({ where: {id}});
  }
}
