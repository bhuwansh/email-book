import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { EmailListComponent } from './components/email-list/email-list.component';
import { CoverpageComponent } from './components/coverpage/coverpage.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddComponyComponent } from './components/add-compony/add-compony.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { HeadMenuComponent } from './components/head-menu/head-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './site-layout/header/header.component';
import { FooterComponent } from './site-layout/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    EmailListComponent,
    CoverpageComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    AddComponyComponent,
    FooterMenuComponent,
    HeadMenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, 
     FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
