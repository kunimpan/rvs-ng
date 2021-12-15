import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { APP_URL } from 'src/app/app.url';
import { USER_URL } from '../user/user.url';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  modalRef!: BsModalRef;

  APP_URL = APP_URL;
  USER_URL = USER_URL;

  constructor(
    private _router: Router,
    private _modal: BsModalService,
  ) { }

  ngOnInit(): void {
  }

  onClickMenu(path: string): void{
    this._router.navigate(['', APP_URL.USER, path]);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this._modal.show(template);
  }

}
