import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Aspiration } from '../aspirations/aspiration.entity';
import { User } from '../users/user.entity';

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: false, cascade: false })
  user: User;

  @ManyToOne(() => Aspiration, (aspiration) => aspiration.actions, {
    nullable: true,
    cascade: false,
  })
  aspiration: Aspiration;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
