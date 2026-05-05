import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-dialog-box',
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatIcon],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
})
export class DialogBox {

 


}
