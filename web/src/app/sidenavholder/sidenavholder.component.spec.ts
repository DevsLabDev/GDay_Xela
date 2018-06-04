import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavholderComponent } from './sidenavholder.component';

describe('SidenavholderComponent', () => {
  let component: SidenavholderComponent;
  let fixture: ComponentFixture<SidenavholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
