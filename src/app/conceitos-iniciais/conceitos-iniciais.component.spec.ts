import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitosIniciaisComponent } from './conceitos-iniciais.component';

describe('ConceitosIniciaisComponent', () => {
  let component: ConceitosIniciaisComponent;
  let fixture: ComponentFixture<ConceitosIniciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceitosIniciaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceitosIniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
