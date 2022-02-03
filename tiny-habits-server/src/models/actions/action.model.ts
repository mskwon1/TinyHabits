import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Aspiration } from '../aspirations/aspiration.entity';
import { AspirationModel } from '../aspirations/aspiration.model';
import { User } from '../users/user.entity';
import { UserModel } from '../users/user.model';

@ObjectType()
export class ActionModel {
  @Field(() => ID)
  id: number;

  @Field((type) => UserModel)
  user: User;

  @Field((type) => AspirationModel)
  aspiration: Aspiration;

  @Field()
  name: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
