import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoLoaderTurnComponent } from './cisco-loader-turn.component';

describe('CiscoLoaderTurnComponent', () => {
  let component: CiscoLoaderTurnComponent;
  let fixture: ComponentFixture<CiscoLoaderTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiscoLoaderTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoLoaderTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
