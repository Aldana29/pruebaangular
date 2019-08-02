import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';


const routes: Routes = [

  // importar paginas
  {path:'contacto', component: ContactoComponent},
  {path:'promociones', component: PromocionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
