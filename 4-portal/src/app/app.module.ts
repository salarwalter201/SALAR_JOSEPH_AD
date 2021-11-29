import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireAuthModule, PERSISTENCE } from '@angular/fire/compat/auth'; //
import { initializeApp } from '@firebase/app';

import {environment } from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {PERSISTENCE } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [{ provide: PERSISTENCE, useValue: 'session'}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }