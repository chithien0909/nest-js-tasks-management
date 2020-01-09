import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config'
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
const dbConfig = config.get('db');
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DATABASE || dbConfig.database,
  entities: ['dist/**/*.entity.js'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};
