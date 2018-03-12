import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoLoaderFillComponent } from './cisco-loader-fill.component';

describe('CiscoLoaderFillComponent', () => {
  let component: CiscoLoaderFillComponent;
  let fixture: ComponentFixture<CiscoLoaderFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiscoLoaderFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoLoaderFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
