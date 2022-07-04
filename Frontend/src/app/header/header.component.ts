import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services';
import { User } from '../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService, private router: Router) {
    this.user = this.accountService.getuser();
  }

  isUserAvailable(){
    return this.user;
  }
  // tslint:disable-next-line: typedef
  logout() {
      //this.accountService.logout();
      this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
