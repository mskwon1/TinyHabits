import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Action } from './action.entity';

@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(Action) private actionRepository: Repository<Action>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(params: CreateActionParams): Promise<Action> {
    const { userId, aspirationId, name } = params;

    const action = this.actionRepository.create({ aspirationId, userId, name });
    const createdAction = await this.actionRepository.save(action);

    return createdAction;
  }

  async findAll(options: ActionWheres): Promise<Action[]> {
    return this.actionRepository.find(options);
  }

  async findOneById(actionId: number): Promise<Action> {
    return this.actionRepository.findOne(actionId);
  }

  async update(actionId: number, params: UpdateActionParams): Promise<Action> {
    const { name } = params;

    await this.actionRepository.update(actionId, { name });
    const updatedAction = await this.actionRepository.findOne(actionId);

    return updatedAction;
  }

  async delete(actionId: number): Promise<void> {
    await this.actionRepository.delete(actionId);
  }
}
