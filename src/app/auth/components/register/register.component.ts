import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../../shared/auth-dialog/auth-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}
  private buildForm() {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
    });
  }
  register(event) {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '462px',
      data: { content: 'policy' },
      panelClass: 'custom-modal'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
