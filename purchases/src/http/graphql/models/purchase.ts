import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

import { Product } from './product';

enum PurchaseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'Available purchase statuses',
});

@ObjectType()
export class Purchase {
  @Field(() => ID)
  id: string;

  @Field(() => PurchaseStatus)
  status: PurchaseStatus;

  @Field(() => Date)
  createdAt: Date;

  // Sempre que não for valor primitivo tem que forçar a tipagem
  @Field(() => Product)
  product: Product;

  // Sem o field pro frontend não conseguir selecionar este campo
  productId: string;
}
