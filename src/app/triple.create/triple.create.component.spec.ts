import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TripleCreateComponent } from './triple.create.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('TripleCreateComponent', () => {
  let component: TripleCreateComponent;
  let fixture: ComponentFixture<TripleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
    ],
      declarations: [ TripleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
