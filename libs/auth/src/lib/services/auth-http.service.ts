import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../environment';
import { UserData, ValidateUser } from '../interfaces/Auth.interface';

@Injectable()
export class AuthHttpService {
  constructor(
    private httpClient: HttpClient,
    @Inject(ENVIRONMENT) private environment: any
  ) {}
  signUpUser(userData: UserData): Observable<UserData> {
    return this.httpClient.put<UserData>(
      `${this.environment.apis.baseUrl}/user`,
      userData
    );
  }

  getUser(userName: string): Observable<UserData> {
    return this.httpClient.get<UserData>(
      `${this.environment.apis.baseUrl}/user/${userName}`
    );
  }
  validateUser(userData: ValidateUser): Observable<{ access_token: string }> {
    return this.httpClient.post<{ access_token: string }>(
      `${this.environment.apis.baseUrl}/user`,
      userData
    );
  }
  updateUser(userData: UserData): Observable<UserData> {
    return this.httpClient.patch<UserData>(
      `${this.environment.apis.baseUrl}/user`,
      userData
    );
  }
}
