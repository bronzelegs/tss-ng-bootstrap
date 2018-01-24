import {Component, OnInit, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TriplesService} from '../triples.service';
import {Triple} from '../triple';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-triple-detail',
  templateUrl: 'triple-detail.component.html',
  styleUrls: ['triple-detail.component.css']
  //encapsulation: ViewEncapsulation.Native
})
export class TripleDetailComponent implements OnInit {

  triples$: Observable<Triple[]>;
  triple = new Triple;

  constructor(private triplesService: TriplesService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient){
  }

  ngOnInit() {
    this.triples$ = this.triplesService.triples;
    this.triple = this.triplesService.get(this.route.snapshot.params['id']);
  }

  /*
  deleteTriple(id) {
    this.triplesService.remove(id);
    this.router.navigate(['triples']);
  }
  */
}
