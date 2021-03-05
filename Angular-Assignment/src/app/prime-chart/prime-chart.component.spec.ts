import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeChartComponent } from './prime-chart.component';

describe('PrimeChartComponent', () => {
  let component: PrimeChartComponent;
  let fixture: ComponentFixture<PrimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
