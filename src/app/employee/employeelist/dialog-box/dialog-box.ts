import { Component, inject, ViewEncapsulation} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatIcon,ReactiveFormsModule],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
})
export class DialogBox {


  data= new FormGroup(
    {
      name:new FormControl('',[Validators.required]),
      salary:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required])
    }
  )

  get form()
  {
    return this.data.controls;
  }


}
