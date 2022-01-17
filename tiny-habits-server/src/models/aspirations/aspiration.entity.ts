import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Action } from '../actions/action.entity';
import { User } from '../users/user.entity';

@Entity()
export class Aspiration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: false, cascade: false })
  user: User;

  @OneToMany(() => Action, (action) => action.aspiration)
  actions: Action[];

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
