import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFirstDoseComponent } from './manage-first-dose.component';

describe('ManageFirstDoseComponent', () => {
  let component: ManageFirstDoseComponent;
  let fixture: ComponentFixture<ManageFirstDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFirstDoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFirstDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
