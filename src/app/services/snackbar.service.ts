import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  snackBar(massage:string,action:string){
    this._snackBar.open(massage,action,{
      direction:'ltr',
      horizontalPosition:'center',
      verticalPosition:'bottom',
      duration:5000,
      panelClass:['red-snackbar']
    })
  }

}
