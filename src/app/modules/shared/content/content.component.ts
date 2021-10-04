import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_URL } from 'src/app/app.url';
import { USER_URL } from '../../user/user.url';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  APP_URL = APP_URL;
  USER_URL = USER_URL;
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
  

}
