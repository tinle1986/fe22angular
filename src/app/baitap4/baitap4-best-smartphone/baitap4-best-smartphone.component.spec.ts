import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4BestSmartphoneComponent } from './baitap4-best-smartphone.component';

describe('Baitap4BestSmartphoneComponent', () => {
  let component: Baitap4BestSmartphoneComponent;
  let fixture: ComponentFixture<Baitap4BestSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4BestSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4BestSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
