import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: '123',
//   database: 'taskmanagement',
//   entities: ['dist/**/*.entity.js'],
//   synchronize: true,
// };

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'chithien123',
  database: 'taskmanagement',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};
