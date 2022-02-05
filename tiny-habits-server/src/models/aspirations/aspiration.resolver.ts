import {
  Args,
  Int,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ActionService } from '../actions/action.service';
import { UserService } from '../users/user.service';
import { Aspiration } from './aspiration.entity';
import { AspirationModel } from './aspiration.model';
import { AspirationService } from './aspiration.service';

@Resolver(() => AspirationModel)
export class AspirationResolver {
  constructor(
    private readonly aspirationService: AspirationService,
    private readonly actionService: ActionService,
    private readonly userService: UserService,
  ) {}

  @Query((returns) => AspirationModel)
  async aspiration(@Args('id', { type: () => Int }) aspirationId: number) {
    return this.aspirationService.findOneById(aspirationId);
  }

  @ResolveField()
  async user(@Parent() aspiration: Aspiration) {
    const { userId } = aspiration;

    return this.userService.findOneById(userId);
  }

  @ResolveField()
  async actions(@Parent() aspiration: Aspiration) {
    const { id: aspirationId } = aspiration;

    return this.actionService.findAll({ aspirationId });
  }
}
