import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PersonasComponent } from './personas/personas.component';
import { ExpoCoderComponent } from './expo-coder/expo-coder.component';
import { InscriptosComponent } from './inscriptos/inscriptos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'expoCoder', component: ExpoCoderComponent},
  { path: 'inscriptos', component: InscriptosComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContenidoComponent,
    PersonasComponent,
    ExpoCoderComponent,
    InscriptosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
