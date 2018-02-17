import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotchartComponent } from './flotchart.component';

describe('FlotchartComponent', () => {
  let component: FlotchartComponent;
  let fixture: ComponentFixture<FlotchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
