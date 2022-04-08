import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import path from 'node:path';

import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from './../services/students.service';
import { DatabaseModule } from './../database/database.module';
import { CoursesService } from '../services/course.service';

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
    CoursesResolver,
    StudentsResolver,
    EnrollmentsResolver,

    CoursesService,
    StudentsService,
    EnrollmentsService,
  ],
})
export class HttpModule {}
