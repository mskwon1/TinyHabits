import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { AspirationModel } from '../aspirations/aspiration.model';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field((type) => [AspirationModel])
  aspirations: AspirationModel[];
}
