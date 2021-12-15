import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSecondDoseComponent } from './manage-second-dose.component';

describe('ManageSecondDoseComponent', () => {
  let component: ManageSecondDoseComponent;
  let fixture: ComponentFixture<ManageSecondDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSecondDoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSecondDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
