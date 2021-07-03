import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, UserData } from '@assessment-penny/auth';

@Component({
  selector: 'assessment-penny-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allUsers: UserData[] = [];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.allUsers = <UserData[]>data.users;
    });
  }
  logOutUser() {
    this.router.navigate(['sign-in']);
    this.authService.logout();
  }
}
