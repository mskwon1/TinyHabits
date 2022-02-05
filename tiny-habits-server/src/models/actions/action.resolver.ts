import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AspirationService } from '../aspirations/aspiration.service';
import { UserService } from '../users/user.service';
import { Action } from './action.entity';
import { ActionModel } from './action.model';
import { ActionService } from './action.service';

@Resolver(() => ActionModel)
export class ActionResolver {
  constructor(
    private readonly aspirationService: AspirationService,
    private readonly actionService: ActionService,
    private readonly userService: UserService,
  ) {}

  @Query((returns) => ActionModel)
  async action(@Args('id', { type: () => Int }) actionId: number) {
    return this.actionService.findOneById(actionId);
  }

  @ResolveField()
  async user(@Parent() action: Action) {
    const { userId } = action;

    return this.userService.findOneById(userId);
  }

  @ResolveField()
  async aspiration(@Parent() action: Action) {
    const { aspirationId } = action;

    return this.aspirationService.findOneById(aspirationId);
  }
}
