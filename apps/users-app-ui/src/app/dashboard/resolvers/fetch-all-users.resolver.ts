import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserData } from '@assessment-penny/auth';
import { DashboardHttpService } from '../services/dashboard-http.service';

@Injectable({
  providedIn: 'root',
})
export class FetchAllUsersResolver implements Resolve<UserData[] | boolean> {
  constructor(private dashboardHttpService: DashboardHttpService) {}
  resolve(): Observable<UserData[] | boolean> {
    return this.dashboardHttpService.getAllUsers().pipe(
      catchError((error) => {
        return of(false);
      })
    );
  }
}
