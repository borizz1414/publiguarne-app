import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../../shared/dialogs/product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getEvent(action) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {width: '800px', data: action});
  
  }

}