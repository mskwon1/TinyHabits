import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => UserModel)
  async user(@Args('id', { type: () => Int }) userId: number) {
    return this.userService.findOne(userId);
  }
}
