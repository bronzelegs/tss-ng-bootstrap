import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-modall',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})

export class ConfirmModalContent {
  public question = "Do you want to delete this triple";

  constructor(public activeModal: NgbActiveModal) {}
}
