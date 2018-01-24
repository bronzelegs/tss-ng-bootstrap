import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TripleDetailComponent } from './triple-detail.component';

describe('TripleDetailComponent', () => {
  let component: TripleDetailComponent;
  let fixture: ComponentFixture<TripleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({     imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
      declarations: [ TripleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
