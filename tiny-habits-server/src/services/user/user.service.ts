import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@src/models/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(params: CreateUserParams): Promise<User> {
    const user = this.userRepository.create(params);
    const createdUser = await this.userRepository.save(user);

    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(userId: number): Promise<User> {
    return this.userRepository.findOne(userId);
  }

  async update(
    userId: number,
    updateUserParams: UpdateUserParams,
  ): Promise<User> {
    const updatedUser = await this.userRepository.save({
      id: userId,
      ...updateUserParams,
    });

    return updatedUser;
  }

  async delete(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
