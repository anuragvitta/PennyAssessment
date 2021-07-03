import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import {
  UserUpdateQueryDocument,
  User,
  UserDocument,
} from '../schemas/user.model';
import { UserData } from '../controllers/user.dao';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}
  async upsertUser(userData: UserData) {
    const filter = { userName: userData.userName };
    const update: UserUpdateQueryDocument = {
      maidenName: userData.maidenName,
      password: userData.password,
    };
    return await this.userModel.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });
  }
  async getAllUsers() {
    return await this.userModel.find().exec();
  }
  async getUser(userName: string, password: string = null) {
    return password
      ? await this.userModel.findOne({ userName, password }).exec()
      : await this.userModel.findOne({ userName }).exec();
  }
  generateJWTtoken(userData: Partial<UserData>) {
    return {
      access_token: this.jwtService.sign(userData),
    };
  }
}
