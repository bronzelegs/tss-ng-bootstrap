import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TriplesService } from '../triples.service';
import { Observable } from 'rxjs/Observable';
import { Triple } from '../triple';

@Component({
  selector: 'app-triple-edit',
  templateUrl: 'triple.edit.component.html',
  styleUrls: ['triple.edit.component.css']

})
export class TripleEditComponent implements OnInit {

  triples$: Observable<Triple[]>;
  triple  = new Triple;


  constructor(private triplesService: TriplesService,
              private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.triples$ = this.triplesService.triples;
    this.triple = this.triplesService.get(this.route.snapshot.params['id']);
  }

  updateTriple(id) {
    this.triple.updatedAt = Date.now().toString();
    console.log(this.triple);
    this.triplesService.update(this.triple);
    this.router.navigate(['triples']);
  }
}
