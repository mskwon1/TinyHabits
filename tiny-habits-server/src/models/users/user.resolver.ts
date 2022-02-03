import { UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { GqlAuthGuard } from '@src/api/auth/gql-auth.guard';
import { GqlUser } from '@src/decorators/gql-user.decorator';
import { ActionService } from '../actions/action.service';
import { AspirationService } from '../aspirations/aspiration.service';
import { User } from './user.entity';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly aspirationService: AspirationService,
    private readonly actionService: ActionService,
  ) {}

  @Query((returns) => UserModel)
  async user(@Args('id', { type: () => Int }) userId: number) {
    return this.userService.findOneById(userId);
  }

  @Query((returns) => UserModel)
  @UseGuards(GqlAuthGuard)
  async me(@GqlUser() user: User) {
    return this.userService.findOneById(user.id);
  }

  @ResolveField()
  async aspirations(@Parent() user: UserModel) {
    const { id } = user;

    return this.aspirationService.findAll({ userId: id });
  }

  @ResolveField()
  async actions(@Parent() user: UserModel) {
    const { id: userId } = user;

    return this.actionService.findAll({ userId });
  }
}
