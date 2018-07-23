import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectViewComponent } from './admin-project-view.component';

describe('AdminProjectViewComponent', () => {
  let component: AdminProjectViewComponent;
  let fixture: ComponentFixture<AdminProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
