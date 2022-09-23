import { Module } from '@nestjs/common';
import { SetoresService } from './setores.service';
import { SetoresController } from './setores.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [SetoresController],
  providers: [SetoresService, PrismaService]
})
export class SetoresModule {}
