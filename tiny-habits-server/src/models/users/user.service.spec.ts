import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '@src/models/users/user.entity';
import { UserService } from './user.service';
import * as _ from 'lodash';
import * as faker from '@faker-js/faker';

const mockUserRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOne: jest.fn(),
  find: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

const createMockUser = (userId: number): User => {
  return {
    id: userId,
    email: faker.internet.email(),
    name: faker.name.findName(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.past().toISOString(),
  };
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

      expect(userRepositoryCreateSpy).toBeCalledWith(createUserDto);
      expect(userRepositorySaveSpy).toBeCalledWith(createdUser);
      expect(result).toEqual(savedUser);
    });
  });

  describe('Retrieve', () => {
    it('findAll should return all users', async () => {
      const savedUsers = _.map(_.range(1, 3), createMockUser);

      const userRepositoryFindSpy = jest
        .spyOn(mockUserRepository, 'find')
        .mockResolvedValue(savedUsers);

      const resultUsers = await userService.findAll();

      expect(userRepositoryFindSpy).toBeCalled();
      expect(resultUsers).toEqual(savedUsers);
    });

    it('findOne should return corresponding user', async () => {
      const testUserId = faker.datatype.number();
      const savedUser = createMockUser(testUserId);

      const userRepositoryFindOneSpy = jest
        .spyOn(mockUserRepository, 'findOne')
        .mockResolvedValue(savedUser);

      const resultUser = await userService.findOne(testUserId);

      expect(userRepositoryFindOneSpy).toBeCalledWith(testUserId);
      expect(resultUser).toEqual(savedUser);
    });
  });

  describe('Update', () => {
    it('should return updated user', async () => {
      const testUserId = faker.datatype.number();
      const originalUser = createMockUser(testUserId);

      const newUserName = faker.name.findName();
      const updateUserDto: UpdateUserParams = { name: newUserName };

      const updatedUser: User = {
        ...originalUser,
        ...updateUserDto,
      };

      const userRepositoryUpdateSpy = jest.spyOn(mockUserRepository, 'update');
      const userRepositoryFindOneSpy = jest
        .spyOn(mockUserRepository, 'findOne')
        .mockResolvedValue(updatedUser);

      const result = await userService.update(testUserId, updateUserDto);

      expect(userRepositoryUpdateSpy).toBeCalledWith(testUserId, updateUserDto);
      expect(userRepositoryFindOneSpy).toBeCalledWith(testUserId);
      expect(result).toEqual(updatedUser);
    });
  });

  describe('Delete', () => {
    it('remove should not throw', async () => {
      const testUserId = faker.datatype.number();

      const userRepositoryDeleteSpy = jest
        .spyOn(mockUserRepository, 'delete')
        .mockImplementationOnce(() => Promise.resolve());

      const result = await userService.delete(testUserId);

      expect(userRepositoryDeleteSpy).toBeCalledWith(testUserId);
    });
  });
});
