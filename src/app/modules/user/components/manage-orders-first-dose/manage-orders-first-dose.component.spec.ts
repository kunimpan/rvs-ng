import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrdersFirstDoseComponent } from './manage-orders-first-dose.component';

describe('ManageOrdersFirstDoseComponent', () => {
  let component: ManageOrdersFirstDoseComponent;
  let fixture: ComponentFixture<ManageOrdersFirstDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOrdersFirstDoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrdersFirstDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
