import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrdersSecondDoseComponent } from './manage-orders-second-dose.component';

describe('ManageOrdersSecondDoseComponent', () => {
  let component: ManageOrdersSecondDoseComponent;
  let fixture: ComponentFixture<ManageOrdersSecondDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOrdersSecondDoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrdersSecondDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
