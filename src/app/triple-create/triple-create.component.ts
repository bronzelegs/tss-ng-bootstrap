import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TriplesService} from '../triples.service';
import {Triple} from '../triple';

@Component({
  selector: 'app-triple-create',
  templateUrl: 'triple-create.component.html',
  styleUrls: ['triple-create.component.css'],

})
export class TripleCreateComponent implements OnInit {
  triple = new Triple();

  constructor(private triplesService: TriplesService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  saveTriple() {
    console.log(this.triple);
    this.triplesService.create(this.triple);
    this.router.navigate(['triples']);
  }

}
