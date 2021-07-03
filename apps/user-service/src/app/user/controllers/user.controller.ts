import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserRequestData, UserUpdateRequestData } from './user.dao';
import { Response } from 'express';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async findAllUsers() {
    return await this.userService.getAllUsers();
  }
  @Get(':userName')
  async findUser(@Param() params: { userName: string }, @Res() res: Response) {
    const user = await this.userService.getUser(params.userName);
    user
      ? res.status(200).send(user)
      : res.status(400).send({
          error: 'Bad request',
          message: ['No user exists with given username'],
        });
  }
  @Post('')
  async validateUser(@Body() userData: UserRequestData, @Res() res: Response) {
    const user = await this.userService.getUser(
      userData.userName,
      userData.password
    );

    user
      ? res.status(200).send(this.userService.generateJWTtoken(userData))
      : res.status(401).send({
          error: 'Unauthorized',
          message: ['User or Password invalid'],
        });
  }
  @Put('')
  async createUser(@Body() userData: UserUpdateRequestData) {
    return await this.userService.upsertUser(userData);
  }
  @Patch('')
  async updateUser(@Body() userData: UserUpdateRequestData) {
    return await this.userService.upsertUser(userData);
  }
}
