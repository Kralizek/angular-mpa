import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserSummaryComponent } from './view-user-summary.component';

describe('ViewUserSummaryComponent', () => {
  let component: ViewUserSummaryComponent;
  let fixture: ComponentFixture<ViewUserSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
