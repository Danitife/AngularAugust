import { Component } from '@angular/core';
import { ApiCallService } from '../service/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(public getUser: ApiCallService, public router: Router){}
  public users:any = []
  ngOnInit(): void{
    this.getAllTodo()
  }
  getAllTodo(){
    this.getUser.getUser().subscribe(data=>{
      console.log(data);
      this.users = data
    },(error)=>{
      console.log(error);
    } )
  }

  logout(){
    localStorage.removeItem("todoUser");
    this.router.navigate(['/login'])
  }
}
