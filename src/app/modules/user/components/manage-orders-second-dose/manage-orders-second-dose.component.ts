import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-orders-second-dose',
  templateUrl: './manage-orders-second-dose.component.html',
  styleUrls: ['./manage-orders-second-dose.component.scss']
})
export class ManageOrdersSecondDoseComponent implements OnInit {

  modalRef!: BsModalRef;
  bank:string = "assets/images/bank.jpg";

  constructor(
    private _close: BsModalService,
    private _modal: NgbModal,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openCreate(template: TemplateRef<any>): void {
    this.modalRef = this._close.show(template);
  }

  openModal(templatecheck: TemplateRef<any>): void {
    this._modal.open(templatecheck, 
      );
  }

}
