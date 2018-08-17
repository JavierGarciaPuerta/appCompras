import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfactComponent } from './addfact.component';

describe('AddfactComponent', () => {
  let component: AddfactComponent;
  let fixture: ComponentFixture<AddfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
