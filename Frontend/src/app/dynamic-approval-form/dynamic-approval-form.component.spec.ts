import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicApprovalFormComponent } from './dynamic-approval-form.component';

describe('DynamicApprovalFormComponent', () => {
  let component: DynamicApprovalFormComponent;
  let fixture: ComponentFixture<DynamicApprovalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicApprovalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicApprovalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
