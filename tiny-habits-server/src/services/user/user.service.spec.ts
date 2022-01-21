import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '@src/models/users/user.entity';
import { UserService } from './user.service';
import * as _ from 'lodash';
import * as faker from '@faker-js/faker';

const mockUsers: User[] = [
  {
    id: 1,
    email: 'minsu1@publy.co',
    name: '권민수',
    createdAt: '2022-01-19 00:00:00',
    updatedAt: '2022-01-19 00:00:00',
  },
  {
    id: 2,
    email: 'minsu2@publy.co',
    name: '권민수2',
    createdAt: '2022-01-20 00:00:00',
    updatedAt: '2022-01-20 00:00:00',
  },
  {
    id: 3,
    email: 'minsu3@publy.co',
    name: '권민수3',
    createdAt: '2022-01-21 00:00:00',
    updatedAt: '2022-01-21 00:00:00',
  },
];

const mockUserRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOne: jest.fn(async (userId: number) => _.find(mockUsers, ['id', userId])),
  find: jest.fn(async () => mockUsers),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('UserService', () => {
  let userService: UserService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: mockUserRepository },
      ],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
  });

  describe('Create', () => {
    it('should return created user if params are valid', async () => {
      const createUserDto: CreateUserParams = {
        email: faker.internet.email(),
        name: faker.name.findName(),
      };

      const createdUser: Partial<User> = {
        ...createUserDto,
      };

      const savedUser: User = {
        id: faker.datatype.number(),
        ...createUserDto,
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.past().toISOString(),
      };

      const userRepositoryCreateSpy = jest
        .spyOn(mockUserRepository, 'create')
        .mockReturnValue(createdUser);

      const userRepositorySaveSpy = jest
        .spyOn(mockUserRepository, 'save')
        .mockResolvedValue(savedUser);

      const result = await userService.create(createUserDto);

      expect(userRepositoryCreateSpy).toHaveBeenCalledWith(createUserDto);
      expect(userRepositorySaveSpy).toHaveBeenCalledWith(createdUser);
      expect(result).toEqual(savedUser);
    });
  });

  describe('Retrieve', () => {
    it('findAll should return all users', async () => {
      const resultUsers = await userService.findAll();

      expect(resultUsers).toBeDefined();
      expect(Array.isArray(resultUsers)).toBe(true);
    });

    it('findOne should return corresponding user', async () => {
      const testUserId = 1;
      const resultUser = await userService.findOne(testUserId);

      expect(resultUser).toBeDefined();
      expect(resultUser.id).toBe(testUserId);
    });
  });

  describe('Update', () => {
    it('update should not thorw', async () => {
      const targetUserId = 1;
      expect(
        userService.update(targetUserId, { name: '민수권' }),
      ).resolves.not.toThrow();
    });
  });

  describe('Delete', () => {
    it('remove should not throw', async () => {
      const testUserId = 1;

      await expect(userService.delete(testUserId)).resolves.not.toThrow();
    });
  });
});
