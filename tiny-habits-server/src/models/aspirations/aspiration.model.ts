import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { ActionModel } from '../actions/action.model';
import { User } from '../users/user.entity';
import { UserModel } from '../users/user.model';

@ObjectType()
export class AspirationModel {
  @Field(() => ID)
  id: number;

  @Field((type) => UserModel)
  user: User;

  @Field((type) => [ActionModel])
  actions: ActionModel[];

  @Field()
  name: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
