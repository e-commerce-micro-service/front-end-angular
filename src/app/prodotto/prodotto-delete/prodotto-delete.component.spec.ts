import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoDeleteComponent } from './prodotto-delete.component';

describe('ProdottoDeleteComponent', () => {
  let component: ProdottoDeleteComponent;
  let fixture: ComponentFixture<ProdottoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
