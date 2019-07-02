import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4BestLaptopComponent } from './baitap4-best-laptop.component';

describe('Baitap4BestLaptopComponent', () => {
  let component: Baitap4BestLaptopComponent;
  let fixture: ComponentFixture<Baitap4BestLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4BestLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4BestLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
