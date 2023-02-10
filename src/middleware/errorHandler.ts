import { Request, Response } from 'express';

module.exports = (err: Error, req: Request, res: Response) => {
  res.status(500).send('Error!');
};
