import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public route: Router){}
  public username:string = ""
  public password:string = ""

  login (){
    if(this.username == ""){
      return
    }else{
      let user_data:any = {username:this.username}
          localStorage.setItem("todoUser", JSON.stringify(user_data))
          this.route.navigate(['/todo'])
    }    
    
  }
}
