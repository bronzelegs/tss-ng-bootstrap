import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TriplesService} from '../triples.service';
import {Observable} from 'rxjs/Observable';
import {Triple} from '../triple';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {ConfirmModalContent} from '../confirm-modal/confirm-modal.component';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-triple-list',
  templateUrl: 'triple-list.component.html',
  styleUrls: ['triple-list.component.css'],

})
export class TripleListComponent implements OnInit {

  triples$: Observable<Triple[]>;

  private _success = new Subject<string>();
  successMessage: string;

  constructor(private http: HttpClient,
              private triplesService: TriplesService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    console.log('ngoninit');
    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => {this.successMessage = null;console.log('fired');});

    this.triples$ = this.triplesService.triples;
    this.triplesService.loadAll();
  }

  delete(id) {
    this.modalService.open(ConfirmModalContent).result.then((ans) => {
      if (ans === 'Confirm') {
        this.triplesService.remove(id);
        this.router.navigate(['triples']);
        this.successMessage = 'triple deleted';
      }
    });
  }
}





