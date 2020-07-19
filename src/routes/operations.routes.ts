import { Router } from 'express';

const operationsRouter = Router();

operationsRouter.get('/', (request, response) => {
  return response.send('TESTE');
});

export default operationsRouter;
