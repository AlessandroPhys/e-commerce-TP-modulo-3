import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { BannerComponent } from './banner/banner.component';
import { SlideLibrosRecomendadosComponent } from './slide-libros-recomendados/slide-libros-recomendados.component';
import { FooterDetailComponent } from './footer-detail/footer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    BannerComponent,
    SlideLibrosRecomendadosComponent,
    FooterDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
