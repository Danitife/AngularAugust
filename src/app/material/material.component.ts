import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar"

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  constructor(private snackbar: MatSnackBar){}
openSnackbar(){
  this.snackbar.open("Welcome to your page", "close", {
    duration: 3000
  })
}
}
