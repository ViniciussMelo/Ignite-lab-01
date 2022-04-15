import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

import { Purchase } from './purchase';

@ObjectType('User')
// Dizer para o gateway qual a chave em comum entre duas entidades iguais,
// mas com nome diferente / serviços diferentes
@Directive('@key(fields: "authUserId")')
export class Customer {
  id: string;

  @Field(() => ID)
  authUserId: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
