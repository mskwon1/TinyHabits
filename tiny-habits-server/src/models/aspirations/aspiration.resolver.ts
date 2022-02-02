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
import { AspirationModel } from './aspiration.model';
import { AspirationService } from './aspiration.service';

@Resolver((of) => AspirationModel)
export class AspirationResolver {
  constructor(private readonly aspirationService: AspirationService) {}

  @Query((returns) => AspirationModel)
  async aspiration(@Args('id', { type: () => Int }) aspirationId: number) {
    return this.aspirationService.findOneById(aspirationId);
  }
}
