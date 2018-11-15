import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserPostsComponent } from './view-user-posts.component';

describe('ViewUserPostsComponent', () => {
  let component: ViewUserPostsComponent;
  let fixture: ComponentFixture<ViewUserPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
