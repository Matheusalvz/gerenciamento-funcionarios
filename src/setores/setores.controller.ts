import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SetoresService } from './setores.service';
import { CreateSetoresDto } from './dto/create-setores.dto';
import { UpdateSetoresDto } from './dto/update-setores.dto';

@Controller('setores')
export class SetoresController {
  constructor(private readonly setoresService: SetoresService) {}

  @Post()
  create(@Body() createSetoreDto: CreateSetoresDto) {
    return this.setoresService.create(createSetoreDto);
  }

  @Get()
  findAll() {
    return this.setoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetoreDto: UpdateSetoresDto) {
    return this.setoresService.update(id, updateSetoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setoresService.remove(id);
  }
}
