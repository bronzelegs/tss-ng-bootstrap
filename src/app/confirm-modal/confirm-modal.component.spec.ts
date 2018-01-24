import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModalContent } from './confirm-modal.component';

describe('ConfirmModalComponent', () => {
  let component: ConfirmModalContent;
  let fixture: ComponentFixture<ConfirmModalContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmModalContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
