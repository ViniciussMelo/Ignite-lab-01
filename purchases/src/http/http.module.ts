import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import path from 'node:path';

import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { ProductsService } from './../services/products.service';
import { PurchasesService } from '../services/purchases.service';
import { CustomersService } from '../services/customers.service';
import { DatabaseModule } from './../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    PurchasesResolver,
    CustomersResolver,

    ProductsService,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}
