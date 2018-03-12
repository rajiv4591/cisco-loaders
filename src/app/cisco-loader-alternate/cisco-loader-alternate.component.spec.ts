import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoLoaderAlternateComponent } from './cisco-loader-alternate.component';

describe('CiscoLoaderAlternateComponent', () => {
  let component: CiscoLoaderAlternateComponent;
  let fixture: ComponentFixture<CiscoLoaderAlternateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiscoLoaderAlternateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoLoaderAlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
