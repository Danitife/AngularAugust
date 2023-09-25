import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnePostComponent } from './one-post/one-post.component';
import { SignupComponent } from './signup/signup.component';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { MaterialComponent } from './material/material.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "forms", component: FormsComponent},
  {path: "post", component: PostComponent},
  {path: "parent", component: ParentComponent},
  {path: "material", component: MaterialComponent},
  {path: "one_post", children:[
    {path: ":id", component: OnePostComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
