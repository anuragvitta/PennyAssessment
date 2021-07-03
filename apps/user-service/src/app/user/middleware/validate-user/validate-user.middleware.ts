import { Injectable, NestMiddleware } from '@nestjs/common';
import { UserService } from '../../services/user.service';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class ValidateUserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const userExists = await this.userService.getUser(req.body.userName);
    if (userExists) {
      res
        .status(400)
        .send({ error: 'Bad Request', message: ['User already Exists'] });
    } else {
      next();
    }
  }
}
