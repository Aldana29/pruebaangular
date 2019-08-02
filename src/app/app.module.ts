import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TarjetaComponent,
    ContactoComponent,
    PromocionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
