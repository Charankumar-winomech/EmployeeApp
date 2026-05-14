import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import moment from 'moment';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
  providers: [
    provideMomentDateAdapter(MY_DATE_FORMATS),
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class DialogBox implements OnInit {
  
  currentDate = moment();
  isEditMode = false;

  constructor(
    private dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
  ) {}

    data = new FormGroup({
    name: new FormControl('', [Validators.required, this.WhitespaceValidator]),
    salary: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl<moment.Moment | null>(null, [Validators.required]),
  });

  ngOnInit() {
    if (this.editData) {
      this.isEditMode = true;

      this.data.patchValue({
        name: this.editData.employeeName,
        mail: this.editData.employeeEmail,
        salary: this.editData.employeeSalary,
        dob: this.editData.employeeDob ? moment(this.editData.employeeDob) : null,
      });
    }
  }

  WhitespaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    return !isWhitespace ? null : { required: true };
  }

  submit() {
    if (this.data.valid) {
      this.dialogRef.close(this.data.value);
    }
  }

  get form() {
    return this.data.controls;
  }
}
