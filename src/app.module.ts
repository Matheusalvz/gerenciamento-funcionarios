import { Module } from '@nestjs/common';
import { EmpresasModule } from './empresas/empresas.module';
import { SetoresModule } from './setores/setores.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { PrismaService } from './database/PrismaService';

@Module({
  imports: [EmpresasModule, SetoresModule, FuncionariosModule],
  // controllers: [AppController],
  // providers: [PrismaService],
})
export class AppModule {}
