import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_URL } from 'src/app/app.url';
import { USER_URL } from '../../user/user.url';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  APP_URL = APP_URL;
  USER_URL = USER_URL;
  imglottery:string = "assets/images/hopital1200.png";
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickMenu(path: string): void {
    this._router.navigate(['', APP_URL.USER, path]);
  }

}
