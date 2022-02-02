import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Aspiration } from './aspiration.entity';

@Injectable()
export class AspirationService {
  constructor(
    @InjectRepository(Aspiration)
    private aspirationRepository: Repository<Aspiration>,
  ) {}

  async create(params: CreateAspirationParams): Promise<Aspiration> {
    const { userId, name } = params;

    const targetUser = new User();
    targetUser.id = userId;

    const aspiration = this.aspirationRepository.create({
      user: targetUser,
      name,
    });
    const createdAspiration = await this.aspirationRepository.save(aspiration);

    return createdAspiration;
  }

  async findAll(): Promise<Aspiration[]> {
    return this.aspirationRepository.find();
  }

  async findOneById(aspirationId: number): Promise<Aspiration> {
    return this.aspirationRepository.findOne(aspirationId);
  }

  async update(
    aspirationId: number,
    params: UpdateAspirationParams,
  ): Promise<Aspiration> {
    const { name } = params;

    await this.aspirationRepository.update(aspirationId, { name });
    const updatedAspiration = await this.aspirationRepository.findOne(
      aspirationId,
    );

    return updatedAspiration;
  }

  async delete(aspirationId: number): Promise<void> {
    await this.aspirationRepository.delete(aspirationId);
  }
}
