import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNewComponent } from './parent-new.component';

describe('ParentNewComponent', () => {
  let component: ParentNewComponent;
  let fixture: ComponentFixture<ParentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
