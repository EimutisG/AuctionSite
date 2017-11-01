import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAdPageComponent } from './place-ad-page.component';

describe('PlaceAdPageComponent', () => {
  let component: PlaceAdPageComponent;
  let fixture: ComponentFixture<PlaceAdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceAdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
