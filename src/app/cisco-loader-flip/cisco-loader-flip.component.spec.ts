import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoLoaderFlipComponent } from './cisco-loader-flip.component';

describe('CiscoLoaderFlipComponent', () => {
  let component: CiscoLoaderFlipComponent;
  let fixture: ComponentFixture<CiscoLoaderFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiscoLoaderFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoLoaderFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
