import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

   fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;
  ngOnInit(){}

  addFieldValue(index) {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
      
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }
}
