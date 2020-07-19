import { Router } from 'express';

import operationsRouter from './operations.routes';

const routes = Router();

routes.use('/operations', operationsRouter);

export default routes;
