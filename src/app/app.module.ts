import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//RUTAS
import { Rutas } from './app.router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
//SERVICIOS



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    Rutas,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
