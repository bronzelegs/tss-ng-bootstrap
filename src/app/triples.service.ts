import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Triple } from './triple';


@Injectable()
export class TriplesService {
  triples: Observable<Triple[]>;
  private _triples: BehaviorSubject<Triple[]>;
  private baseUrl: string;
  private dataStore: {
    triples: any;
  };

  get(id): Triple {
    let notFound = true;
    let triple = new Triple;
    this.dataStore.triples.forEach((item, index) => {
      if (item._id === id) {
        triple = Object.assign({}, this.dataStore.triples[index]);
        notFound = false;
        console.log('found', index, id, triple)
      }
    });
    console.log(notFound);
    return triple;
  }
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://api.bronzelegs.com:5000';
    //this.baseUrl = 'http://localhost:3000';
    this.dataStore = { triples: [] };
    this._triples = <BehaviorSubject<Triple[]>>new BehaviorSubject([]);
    this.triples = this._triples.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/triples`).subscribe(data => {
      this.dataStore.triples =  data;
      this._triples.next(Object.assign({}, this.dataStore).triples);
    }, error => console.log('Could not load triples.'));
  }

  load(id: number | string) {
    this.http.get(`${this.baseUrl}/triples/${id}`).subscribe(data => {
      let notFound = true;

      this.dataStore.triples.forEach((item, index) => {
        if (item._id === (<Triple>data)._id) {
          this.dataStore.triples[index] =<Triple> data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.triples.push(<Triple>data);
      }

      this._triples.next(Object.assign({}, this.dataStore).triples);
    }, error => console.log('Could not load triple.'));
  }

  create(triple: Triple) {
    console.log('this.dataStore.triples ', this.dataStore.triples);

    this.http.post(`${this.baseUrl}/triples`, triple).subscribe(data => {
      console.log('response', data);
      console.log('this.dataStore.triples b4', this.dataStore.triples);
      this.dataStore.triples.push(<Triple>data);
      console.log('this.dataStore.triples ', this.dataStore.triples);
      //this._triples.next(Object.assign({}, this.dataStore).triples);

    }, error => console.log('Could not create triple.', error));
  }

  update(triple: Triple) {
    this.http.put(`${this.baseUrl}/triples/${triple._id}`, triple).subscribe(data => {
      this.dataStore.triples.forEach((t, i) => {
        if (t._id === (<Triple>data)._id) { this.dataStore.triples[i] =<Triple>data; }
      });

      this._triples.next(Object.assign({}, this.dataStore).triples);
    }, error => console.log('Could not update triple.'));
  }

  remove(tripleId: number) {
    this.http.delete(`${this.baseUrl}/triples/${tripleId}`).subscribe(response => {
      this.dataStore.triples.forEach((t, i) => {
        if (t._id === tripleId) { this.dataStore.triples.splice(i, 1); }
      });

      this._triples.next(Object.assign({}, this.dataStore).triples);
    }, error => console.log('Could not delete triple.'));
  }

}
