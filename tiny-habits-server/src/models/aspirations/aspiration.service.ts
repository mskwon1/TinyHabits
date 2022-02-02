import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aspiration } from './aspiration.entity';

@Injectable()
export class AspirationService {
  constructor(
    @InjectRepository(Aspiration)
    private aspirationRepository: Repository<Aspiration>,
  ) {}

  async create(params): Promise<Aspiration> {}

  async findAll(): Promise<Aspiration[]> {
    return this.aspirationRepository.find();
  }

  async findOneById(aspirationId: number): Promise<Aspiration> {
    return this.aspirationRepository.findOne(aspirationId);
  }

  async update(aspirationId: number, params): Promise<Aspiration> {}

  async delete(aspirationId: number): Promise<void> {
    await this.aspirationRepository.delete(aspirationId);
  }
}
