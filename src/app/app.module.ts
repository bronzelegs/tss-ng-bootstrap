import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import {TripleListComponent} from './triple-list/triple-list.component';
import {TripleDetailComponent} from './triple-detail/triple-detail.component';
import {TripleEditComponent} from './triple-edit/triple-edit.component';
import {TripleCreateComponent} from './triple-create/triple-create.component';
import {TriplesService} from './triples.service';
import { ConfirmModalContent } from './confirm-modal/confirm-modal.component';


const appRoutes: Routes = [
  {
    path: 'triples',
    component: TripleListComponent,
    data: {title: 'Triples List'}
  },
  {
    path: 'triple-detail/:id',
    component: TripleDetailComponent,
    data: {title: 'Book Details'}
  },
  {
    path: 'triple-create',
    component: TripleCreateComponent,
    data: {title: 'Create Book'}
  },
  {
    path: 'triple-edit/:id',
    component: TripleEditComponent,
    data: {title: 'Edit Book'}
  },

  {
    path: '',
    redirectTo: '/triples',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TripleListComponent,
    TripleDetailComponent,
    TripleEditComponent,
    TripleCreateComponent,
    ConfirmModalContent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
  ],

  entryComponents: [ ConfirmModalContent],

  providers: [TriplesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
