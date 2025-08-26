import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCalculator } from './my-calculator';

describe('MyCalculator', () => {
  let component: MyCalculator;
  let fixture: ComponentFixture<MyCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
