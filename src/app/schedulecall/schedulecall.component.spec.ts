import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulecallComponent } from './schedulecall.component';

describe('SchedulecallComponent', () => {
  let component: SchedulecallComponent;
  let fixture: ComponentFixture<SchedulecallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulecallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
