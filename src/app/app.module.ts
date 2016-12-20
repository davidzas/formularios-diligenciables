import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ModificacionServiciosComponent } from './modificacion-servicios/modificacion-servicios.component';
import { MainComponent } from './main/main.component';
import {TooltipModule} from "ng2-tooltip";
import { AutosizeDirective } from './autosize.directive';
import { PqrRecursoComponent } from './pqr-recurso/pqr-recurso.component';
import { PqrQuejaComponent } from './pqr-queja/pqr-queja.component';
import { PqrPeticionComponent } from './pqr-peticion/pqr-peticion.component';
import { LimitextareaDirective } from './limitextarea.directive';


const appRoutes: Routes = [
  { path: 'modificacion-servicios', component: ModificacionServiciosComponent },
  { path: 'pqr-recurso', component: PqrRecursoComponent },
  { path: 'pqr-queja', component: PqrQuejaComponent },
  { path: 'pqr-peticion', component: PqrPeticionComponent },
  { path: '**', component: MainComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ModificacionServiciosComponent,
    MainComponent,
    AutosizeDirective,
    PqrRecursoComponent,
    PqrQuejaComponent,
    PqrPeticionComponent,
    LimitextareaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    HttpModule,
    TooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
