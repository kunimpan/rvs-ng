import { Component, OnInit } from '@angular/core';
import { APP_URL } from 'src/app/app.url';
import { USER_URL } from 'src/app/modules/user/user.url';
import { AUTH_URL } from '../../auth.url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  APP_URL = APP_URL;
  AUTH_URL = AUTH_URL;
  USER_URL = USER_URL;
  

  constructor() { }

  ngOnInit(): void {
  }

}
