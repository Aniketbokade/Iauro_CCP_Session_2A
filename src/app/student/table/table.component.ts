import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRowComponent } from '../delete-row/delete-row.component';


export interface PeriodicElement {
  name: string;
  regno: string;
  mobileno: number;
  branch: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {regno: '2020BIT022', name: 'Aniket Bokade', mobileno: 9404745344, branch: 'IT'},
  {regno: '2020BIT016', name: 'Darshan Lanjewar', mobileno: 1234564434,  branch: 'IT'},
  {regno: '2020BIT032', name: 'Prajeal Dalal', mobileno: 2345678990, branch: 'IT'},
  {regno: '2020BIT033', name: 'Rahul Wankhede', mobileno: 1234567890, branch: 'IT'},
  {regno: '2020BIT039', name: 'Pranav Sute', mobileno: 3456789112, branch: 'IT'},
  {regno: '2020BIT046', name: 'Atradhya Bopche', mobileno: 1123456789, branch: 'IT'},
  {regno: '2020BIT052', name: 'Kushagra Satdeve', mobileno: 1456789566, branch: 'IT'},
  {regno: '2020BCS032', name: 'Srujal Singh', mobileno: 2345678911, branch: 'CSE'},
  {regno: '2020BEC046', name: 'Aman Kalmegh', mobileno: 4567891123, branch: 'EXTC'},
  {regno: '2020BPR046', name: 'Kaustubh Vaidya', mobileno: 5771878938, branch: 'PROD'},

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  result: Boolean;

  displayedColumns: string[] = ['regno', 'name', 'mobileno', 'branch', 'delete'];
  
  constructor(private dialog: MatDialog,private _snackBar: MatSnackBar) {
    this.result=false;

  }
  
  dataSource = ELEMENT_DATA;
  title = 'Student_table';

  addRow() {
    const newRow = {regno: '2020BIT022', name: 'Aniket', mobileno: 1467317651, branch: 'IT', isEdit: true}
    this.dataSource = [...this.dataSource, newRow];
  }


  OpendeleteDialog(index: string){
    const dialogRef = this.dialog.open(DeleteRowComponent, {
      width: '300px',
      data: index,
    })

    dialogRef.afterClosed().subscribe(result => {
        this.result=result; this.removeCart(index,result);
        })
     
  }
  
  removeCart(index: string, result: boolean)
  {
    if (this.result==true)
    {
      this.dataSource=this.dataSource.filter((u) => u.regno !== index);
      this._snackBar.open('Row Successfully Deleted', 'Ok');   
    }  
  }
    

}