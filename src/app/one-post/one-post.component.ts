import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent {
  constructor(public routeParams: ActivatedRoute, public saveTodo: TodoService){}

  public post = ""
  ngOnInit(): void{
    console.log(this.routeParams);
    console.log(this.saveTodo.getTodo());
    let route_id = this.routeParams.snapshot.params['id']
    console.log(route_id);
    // let AllPost = JSON.parse(localStorage.getItem("allTodo") !)
    let AllPost = this.saveTodo.getTodo()
    console.log(AllPost);
    this.post = AllPost[route_id]
  }

}
