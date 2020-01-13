import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule} from '@nestjs/graphql';
import { TaskResolver } from './tasks/task.resolver';
import { combineResolvers } from 'graphql-resolvers';
import { merge } from 'rxjs';
import { makeExecutableSchema } from 'graphql-tools';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
