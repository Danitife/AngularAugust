import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar"

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  constructor(public snackbar: MatSnackBar){}
public tt:boolean = true;

toggleTT(){
  this.tt = !this.tt
}
openSnackBar(){
  this.snackbar.open("Congratulations", "close",{
    duration: 5000
  })
}
}
