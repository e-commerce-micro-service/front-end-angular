import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoSearchComponent } from './prodotto-search.component';

describe('ProdottoSearchComponent', () => {
  let component: ProdottoSearchComponent;
  let fixture: ComponentFixture<ProdottoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
