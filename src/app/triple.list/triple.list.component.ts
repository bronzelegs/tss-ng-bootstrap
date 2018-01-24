import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TriplesService} from '../triples.service';
import {Observable} from 'rxjs/Observable';
import {Triple} from '../triple';

@Component({
  selector: 'app-triple-list',
  templateUrl: 'triple.list.component.html',
  styleUrls: ['triple.list.component.css'],

})
export class TripleListComponent implements OnInit {

  triples$: Observable<Triple[]>;

  constructor(private http: HttpClient,
              private triplesService: TriplesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    console.log('ngoninit');
    this.triples$ = this.triplesService.triples;
    this.triplesService.loadAll();
  }

  delete(id) {
    this.triplesService.remove(id);
    this.router.navigate(['triples']);
  }
}
