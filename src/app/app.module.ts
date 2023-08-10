import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountactUsComponent } from './countact-us/countact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnecontactComponent } from './onecontact/onecontact.component';
import { TodoComponent } from './todo/todo.component';
import { OneTodoComponent } from './one-todo/one-todo.component';
import { LoginComponent } from './login/login.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MaterialModule } from './materials/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountactUsComponent,
    NavbarComponent,
    OnecontactComponent,
    TodoComponent,
    OneTodoComponent,
    LoginComponent,
    ShopFormComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
