import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export interface UserData {
  userName: string;
  maidenName: string;
  password: string;
}
export class UserUpdateRequestData {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  maidenName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
export class UserRequestData {
  @IsNotEmpty()
  @IsString()
  userName: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
