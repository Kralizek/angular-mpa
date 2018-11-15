import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAlbumsComponent } from './view-user-albums.component';

describe('ViewUserAlbumsComponent', () => {
  let component: ViewUserAlbumsComponent;
  let fixture: ComponentFixture<ViewUserAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
