import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { APP_URL } from 'src/app/app.url';
import { USER_URL } from '../../user.url';

@Component({
  selector: 'app-manage-first-dose',
  templateUrl: './manage-first-dose.component.html',
  styleUrls: ['./manage-first-dose.component.scss']
})
export class ManageFirstDoseComponent implements OnInit {

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
