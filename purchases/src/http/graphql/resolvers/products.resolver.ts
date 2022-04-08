import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { ProductService } from '../../../services/products.service';
import { Product } from '../models/products';
import { CreateProductInput } from '../inputs/create-product-input';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  // @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
