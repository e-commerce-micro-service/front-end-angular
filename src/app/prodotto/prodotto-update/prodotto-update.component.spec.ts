import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoUpdateComponent } from './prodotto-update.component';

describe('ProdottoUpdateComponent', () => {
  let component: ProdottoUpdateComponent;
  let fixture: ComponentFixture<ProdottoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
