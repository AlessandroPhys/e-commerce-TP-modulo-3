import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasOffcanvaComponent } from './categorias-offcanva.component';

describe('CategoriasOffcanvaComponent', () => {
  let component: CategoriasOffcanvaComponent;
  let fixture: ComponentFixture<CategoriasOffcanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasOffcanvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasOffcanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
