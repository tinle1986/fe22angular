import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4BestItemComponent } from './baitap4-best-item.component';

describe('Baitap4BestItemComponent', () => {
  let component: Baitap4BestItemComponent;
  let fixture: ComponentFixture<Baitap4BestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4BestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4BestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
