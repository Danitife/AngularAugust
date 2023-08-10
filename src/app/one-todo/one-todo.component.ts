import { Component } from '@angular/core';
import { ApiCallService } from '../service/api-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css']
})
export class OneTodoComponent {
  constructor(public oneTodo: ApiCallService, public paramz: ActivatedRoute){}
  public paramm:string = ""
  ngOnInit(): void{
    this.paramm = this.paramz.snapshot.params["id"]
    this.getUser(this.paramm)
  }
  getUser(paramm:string){
    this.oneTodo.getOneUser(paramm).subscribe(data=>{
      console.log(data);
    },(error)=>{
      console.log(error);
      
    }
    )
  }
}
