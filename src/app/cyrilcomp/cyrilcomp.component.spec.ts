import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyrilcompComponent } from './cyrilcomp.component';

describe('CyrilcompComponent', () => {
  let component: CyrilcompComponent;
  let fixture: ComponentFixture<CyrilcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyrilcompComponent]
    });
    fixture = TestBed.createComponent(CyrilcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
