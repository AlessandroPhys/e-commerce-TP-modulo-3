import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDetailComponent } from './footer-detail.component';

describe('FooterDetailComponent', () => {
  let component: FooterDetailComponent;
  let fixture: ComponentFixture<FooterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
