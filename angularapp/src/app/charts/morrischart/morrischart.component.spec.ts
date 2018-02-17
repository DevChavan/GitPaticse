import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorrischartComponent } from './morrischart.component';

describe('MorrischartComponent', () => {
  let component: MorrischartComponent;
  let fixture: ComponentFixture<MorrischartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorrischartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorrischartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
