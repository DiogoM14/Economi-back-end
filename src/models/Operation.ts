import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // ManyToOne,
  // JoinColumn,
} from 'typeorm';

// import User from './User';
// import Category from './Category';

@Entity('operations')
class Operation {
  @PrimaryGeneratedColumn('uuid')
  id: string; // ID => operation

  // @Column()
  // user_id: string; // user_id => user que criou operation

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column('decimal')
  value: number;

  // @Column()
  // category_id: string;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // category: Category;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Operation;
