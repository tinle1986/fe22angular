import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GheDaBookComponent } from './ghe-da-book.component';

describe('GheDaBookComponent', () => {
  let component: GheDaBookComponent;
  let fixture: ComponentFixture<GheDaBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GheDaBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GheDaBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
