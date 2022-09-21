import { Injectable } from '@nestjs/common';
import { CreateSetoreDto } from './dto/create-setore.dto';
import { UpdateSetoreDto } from './dto/update-setore.dto';

@Injectable()
export class SetoresService {
  create(createSetoreDto: CreateSetoreDto) {
    return 'This action adds a new setore';
  }

  findAll() {
    return `This action returns all setores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} setore`;
  }

  update(id: number, updateSetoreDto: UpdateSetoreDto) {
    return `This action updates a #${id} setore`;
  }

  remove(id: number) {
    return `This action removes a #${id} setore`;
  }
}
