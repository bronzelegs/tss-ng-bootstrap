import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TripleEditComponent } from './triple-edit.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TripleEditComponent', () => {
  let component: TripleEditComponent;
  let fixture: ComponentFixture<TripleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ TripleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
