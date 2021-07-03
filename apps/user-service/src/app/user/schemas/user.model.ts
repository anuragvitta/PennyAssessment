import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
export type UserUpdateQueryDocument = Partial<User & Document>;
@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  maidenName: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
