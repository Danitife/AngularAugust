import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfconpComponent } from './alfconp.component';

describe('AlfconpComponent', () => {
  let component: AlfconpComponent;
  let fixture: ComponentFixture<AlfconpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlfconpComponent]
    });
    fixture = TestBed.createComponent(AlfconpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
