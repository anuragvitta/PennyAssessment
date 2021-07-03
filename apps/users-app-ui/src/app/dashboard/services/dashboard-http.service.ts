import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserData } from '@assessment-penny/auth';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '@assessment-penny/auth';
@Injectable({
  providedIn: 'root',
})
export class DashboardHttpService {
  constructor(
    private httpClient: HttpClient,
    @Inject(ENVIRONMENT) private environment: any
  ) {}
  getAllUsers(): Observable<UserData[]> {
    return this.httpClient.get<UserData[]>(
      `${this.environment.apis.baseUrl}/user`
    );
  }
}
