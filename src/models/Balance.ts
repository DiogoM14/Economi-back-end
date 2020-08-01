import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Transaction from './Transaction';
import User from './User';

@Entity('balances')
class Balance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Transaction, transaction => transaction.balance)
  transaction: Transaction;

  @OneToMany(() => User, user => user.balance)
  @JoinColumn({ name: 'balance' })
  user: User;

  @Column()
  income: string;

  @Column()
  outcome: string;

  @Column()
  total: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Balance;
