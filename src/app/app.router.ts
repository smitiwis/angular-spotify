import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// componentes
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';

// import { PageNotFoundComponent } from '';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
  
  //  { path: '**', component: PageNotFoundComponent },

];

export const Rutas=RouterModule.forRoot(routes);
