import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

interface UserId {
  user_id: string;
}

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async getId(): Promise<UserId> {
    const users = await this.find(); // Entre na table Transactions

    console.log(users);
  }
}

export default UsersRepository;
