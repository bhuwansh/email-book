import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponyComponent } from './add-compony.component';

describe('AddComponyComponent', () => {
  let component: AddComponyComponent;
  let fixture: ComponentFixture<AddComponyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
