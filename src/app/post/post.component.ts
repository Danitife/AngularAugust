import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
public allBlog:any = JSON.parse(localStorage.getItem("allPost")!) || []
public author:string = "";
public title:string = "";
public content:string = "";

createPost(ev:any){
  ev.preventDefault();
  let data = {
    author: this.author,
    title: this.title,
    content: this.content,
    isLike: false
  }
  this.allBlog.push(data)
  localStorage.setItem("allPost", JSON.stringify(this.allBlog))
}

del(i:any){
  this.allBlog.splice(i,1)
  localStorage.setItem("allPost", JSON.stringify(this.allBlog))
}

toggleLike(i:any){
  let found = this.allBlog[i]
  console.log(found);
  found.isLike = !found.isLike;
  localStorage.setItem("allPost", JSON.stringify(this.allBlog))
  
}
}
