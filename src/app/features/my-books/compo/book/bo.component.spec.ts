import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoComponent } from './bo.component';

describe('BookComponent', () => {
  let component: BoComponent;
  let fixture: ComponentFixture<BoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoComponent]
    });
    fixture = TestBed.createComponent(BoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
