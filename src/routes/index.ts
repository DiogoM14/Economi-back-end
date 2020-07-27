import { Router } from 'express';

import transactionsRouter from './transactions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/transactions', transactionsRouter);
routes.use('/users', usersRouter);

export default routes;
