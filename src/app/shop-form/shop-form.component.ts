import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent {
  public budget:any = []
public items:any = []
public inputItem:string = "";
public inputPrice:string = ""
public budgetAmount:string = ""
public date:string =  ""

  addItems(){
    let obj = {
      inputItem: this.inputItem,
      inputPrice: this.inputPrice
    }
    this.items.push(obj)
  }
  delItems(i:number){
    this.items.splice(i, 1)
  }
  saveBudget(){
    this.budget = [this.items, this.budgetAmount, this.date]
    console.log(this.budget);
    
  }
}
