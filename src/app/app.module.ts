import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmailContainerComponent } from './email-container/email-container.component';
import { EmailInputboxComponent } from './email-inputbox/email-inputbox.component';
import { EmailSubmitButtonComponent } from './email-submit-button/email-submit-button.component';

import { FooterComponent } from './footer/footer.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { CrudpageComponent } from './crudpage/crudpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailContainerComponent,
    EmailInputboxComponent,
    EmailSubmitButtonComponent,
    FooterComponent,
    NavbarButtonComponent,
    HomepageComponent,
    EmailpageComponent,
    CrudpageComponent,
    AboutpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
