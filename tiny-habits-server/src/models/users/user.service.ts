import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@src/models/users/user.entity';
import * as bcrpyt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(params: CreateUserParams): Promise<User> {
    const { name, email, password } = params;

    const hashedPassword = await bcrpyt.hash(password, 10);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    const createdUser = await this.userRepository.save(user);

    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(userId: number): Promise<User> {
    return this.userRepository.findOne(userId);
  }

  async findOneByEmail(email: string, includePassword = false): Promise<User> {
    if (includePassword) {
      return this.userRepository
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .addSelect('user.password')
        .getOne();
    }

    return this.userRepository.findOne({ email });
  }

  async update(
    userId: number,
    updateUserParams: UpdateUserParams,
  ): Promise<User> {
    const { name } = updateUserParams;

    await this.userRepository.update(userId, { name });
    const updatedUser = this.userRepository.findOne(userId);

    return updatedUser;
  }

  async delete(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
