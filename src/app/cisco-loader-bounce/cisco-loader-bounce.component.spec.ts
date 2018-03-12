import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoLoaderBounceComponent } from './cisco-loader-bounce.component';

describe('CiscoLoaderBounceComponent', () => {
  let component: CiscoLoaderBounceComponent;
  let fixture: ComponentFixture<CiscoLoaderBounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiscoLoaderBounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoLoaderBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
