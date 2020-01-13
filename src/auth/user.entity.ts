import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from '../tasks/task.entity';
import { UserRole } from './enum/user-role.enum';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true})
  email: string;
  @Column({ nullable: true})
  fullname: string;
  @Column({
    type: 'enum',
    enum: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.GUEST],
    default: UserRole.GUEST,
  })
  role: UserRole;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column({nullable: true, type: 'date'})
  created: Date;
  @Column()
  salt: string;
  @OneToMany(
    type => Task,
    task => task.user,
    {eager: true})
  tasks: Task[];
  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
