import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountactUsComponent } from './countact-us/countact-us.component';
import { OnecontactComponent } from './onecontact/onecontact.component';
import { TodoComponent } from './todo/todo.component';
import { OneTodoComponent } from './one-todo/one-todo.component';
import { userGuardGuard } from './guards/user-guard.guard';
import { LoginComponent } from './login/login.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "contact", component: CountactUsComponent},
  {path: "todo", component: TodoComponent, canActivate:[userGuardGuard]},
  {path: "onecontact", children: [
    {path: ":id", component: OnecontactComponent}
  ]},
  {path: "todo/:id", component: OneTodoComponent},
  {path: "login", component: LoginComponent},
  {path: "shop-form", component: ShopFormComponent},
  {path: "material", component: MaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
