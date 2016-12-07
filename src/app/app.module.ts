import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ModificacionServiciosComponent } from './modificacion-servicios/modificacion-servicios.component';
import { MainComponent } from './main/main.component';
import {TooltipModule} from "ng2-tooltip";
import { AutosizeDirective } from './autosize.directive';


const appRoutes: Routes = [
  { path: 'modificacion-servicios', component: ModificacionServiciosComponent },
  { path: '**', component: MainComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ModificacionServiciosComponent,
    MainComponent,
    AutosizeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
