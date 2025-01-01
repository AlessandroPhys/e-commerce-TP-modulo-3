import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideLibrosRecomendadosComponent } from './slide-libros-recomendados.component';

describe('SlideLibrosRecomendadosComponent', () => {
  let component: SlideLibrosRecomendadosComponent;
  let fixture: ComponentFixture<SlideLibrosRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideLibrosRecomendadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideLibrosRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
