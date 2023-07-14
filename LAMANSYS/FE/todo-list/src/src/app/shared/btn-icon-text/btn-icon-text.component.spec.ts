import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIconTextComponent } from './btn-icon-text.component';

describe('BtnIconTextComponent', () => {
  let component: BtnIconTextComponent;
  let fixture: ComponentFixture<BtnIconTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnIconTextComponent]
    });
    fixture = TestBed.createComponent(BtnIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
