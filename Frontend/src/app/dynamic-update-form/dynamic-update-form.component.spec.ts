import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUpdateFormComponent } from './dynamic-update-form.component';

describe('DynamicUpdateFormComponent', () => {
  let component: DynamicUpdateFormComponent;
  let fixture: ComponentFixture<DynamicUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
