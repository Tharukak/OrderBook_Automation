import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { DynamicGridviewComponent } from './dynamic-gridview.component';

describe('DynamicGridviewComponent', () => {
  let component: DynamicGridviewComponent;
  let fixture: ComponentFixture<DynamicGridviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicGridviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
