import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OyindacompComponent } from './oyindacomp.component';

describe('OyindacompComponent', () => {
  let component: OyindacompComponent;
  let fixture: ComponentFixture<OyindacompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OyindacompComponent]
    });
    fixture = TestBed.createComponent(OyindacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
