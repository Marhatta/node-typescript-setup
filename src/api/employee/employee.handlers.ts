import { NextFunction, Request, Response } from 'express';

exports.getAllEmployees = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.json([{ name: 'employee 1' }, { name: 'employee 2' }]);
  } catch (error) {
    next(error);
  }
};
