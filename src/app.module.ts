import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresasModule } from './empresas/empresas.module';
import { SetoresModule } from './setores/setores.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

@Module({
  imports: [EmpresasModule, SetoresModule, FuncionariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
