import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario32Component } from './scenario32.component';

describe('Scenario32Component', () => {
  let component: Scenario32Component;
  let fixture: ComponentFixture<Scenario32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
