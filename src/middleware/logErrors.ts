import { NextFunction, Request, Response } from 'express';
const { logger } = require('../logger');

module.exports = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.stack);
  next(err);
};
