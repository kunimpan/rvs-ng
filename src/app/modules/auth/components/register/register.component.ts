import { Component, OnInit } from '@angular/core';
import { APP_URL } from 'src/app/app.url';
import { AUTH_URL } from '../../auth.url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  APP_URL = APP_URL;
  AUTH_URL = AUTH_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
