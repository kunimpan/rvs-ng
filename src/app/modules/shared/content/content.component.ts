import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_URL } from 'src/app/app.url';
import { ADMIN_URL } from '../../admin/admin.url';
import { AUTH_URL } from '../../auth/auth.url';
import { USER_URL } from '../../user/user.url';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  AUTH_URL = AUTH_URL;
  APP_URL = APP_URL;
  USER_URL = USER_URL;
  ADMIN_URL = ADMIN_URL;
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickMenu(path: string): void {
    this._router.navigate(['', APP_URL.USER, path]);
  }

  onClickMenu1(path: string): void {
    this._router.navigate(['', APP_URL.ADMIN, path]);
  }

  onClickMenu2(path: string): void {
    this._router.navigate(['', APP_URL.AUTH, path]);
  }
  

}
