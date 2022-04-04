import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { PrismaService } from './../database/prisma/prisma.service';

@Resolver('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello World';
  }
}
