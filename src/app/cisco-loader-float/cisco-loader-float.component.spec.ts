import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoLoaderFloatComponent } from './cisco-loader-float.component';

describe('CiscoLoaderFloatComponent', () => {
  let component: CiscoLoaderFloatComponent;
  let fixture: ComponentFixture<CiscoLoaderFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiscoLoaderFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoLoaderFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
