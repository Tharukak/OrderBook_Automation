import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  // tslint:disable-next-line: typedef
  logout() {
      this.accountService.logout();
  }

  ngOnInit(): void {
  }

}
