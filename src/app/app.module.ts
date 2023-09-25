import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnePostComponent } from './one-post/one-post.component';
import { SignupComponent } from './signup/signup.component';
import { FormsComponent } from './forms/forms.component';
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { ChangeCasePipe } from './pipes/change-case.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MaterialModule } from './materials/material/material.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnePostComponent,
    SignupComponent,
    FormsComponent,
    PhoneValidatorDirective,
    ChangeCasePipe,
    ParentComponent,
    ChildComponent,
    NavbarComponent,
    MaterialComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
