import { UseGuards } from '@nestjs/common';
import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from '@src/api/auth/gql-auth.guard';
import { GqlUser } from '@src/decorators/gql-user.decorator';
import { User } from './user.entity';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => UserModel)
  async user(@Args('id', { type: () => Int }) userId: number) {
    return this.userService.findOneById(userId);
  }

  @Query((returns) => UserModel)
  @UseGuards(GqlAuthGuard)
  me(@GqlUser() user: User) {
    return this.userService.findOneById(user.id);
  }
}
