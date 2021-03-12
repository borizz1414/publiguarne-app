import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-classified',
  templateUrl: './add-classified.component.html',
  styleUrls: ['./add-classified.component.scss']
})
export class AddClassifiedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClassifiedComponent>) { }

  ngOnInit(): void {
  }
  close(){
const dialogRef = this.dialogRef.close()
  }

}