import { Component, inject, ViewEncapsulation} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { FormGroup, FormControl, Validators,ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dialog-box',
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatIconModule, ReactiveFormsModule,   MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
})
export class DialogBox {


  data= new FormGroup(
    {
      name:new FormControl('',[Validators.required,this.WhitespaceValidator]),
      salary:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required])
    }
  )

  WhitespaceValidator(control: AbstractControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  return !isWhitespace ? null : { 'required': true };
}
  get form()
  {
    return this.data.controls;
  }


}
