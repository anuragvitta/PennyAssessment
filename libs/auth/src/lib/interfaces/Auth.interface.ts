export interface UserData {
  userName: string;
  maidenName: string;
  password: string;
}
export type ValidateUser = Partial<UserData>;
