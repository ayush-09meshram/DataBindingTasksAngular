import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListsComponent } from './department-lists.component';

describe('DepartmentListsComponent', () => {
  let component: DepartmentListsComponent;
  let fixture: ComponentFixture<DepartmentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
