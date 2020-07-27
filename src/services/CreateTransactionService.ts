// import AppError from '../errors/AppError';

import { getCustomRepository, getRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import UsersRepository from '../repositories/UsersRepository';

import Transaction from '../models/Transaction';

import Category from '../models/Category';

import User from '../models/User';

interface Request {
  user_id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({
    user_id,
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getRepository(Category); // Cria um repositório a partir da model
    const userRepository = getRepository(User); // Cria um repositório a partir da model

    let transactionCategory = await categoryRepository.findOne({
      where: {
        title: category,
      },
    });

    const transactionUser = await userRepository.findOne(user_id);

    if (!transactionCategory) {
      transactionCategory = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(transactionCategory);
    }

    // if (!transactionUser) {
    //   throw new Error('User is not created.');
    // }

    const transaction = transactionsRepository.create({
      user_id: String(transactionUser?.id),
      title,
      value,
      type,
      category: transactionCategory,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
