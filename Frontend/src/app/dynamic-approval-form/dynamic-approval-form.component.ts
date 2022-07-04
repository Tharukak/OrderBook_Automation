import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { orderbookupdateservice } from '../_services/orderbookupdate.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-approval-form',
  templateUrl: './dynamic-approval-form.component.html',
  styleUrls: ['./dynamic-approval-form.component.less'],
  providers: [DatePipe]
})
export class DynamicApprovalFormComponent {

  form: FormGroup;
  OrderId: string ;
  PCD: string;
  comments: string;
  Impact: any;
  SMV: string;
  Include: string;

  submitted = false;
  orderbookupdateservice: any;
  buyerList: any;

 

  get f() { return this.form.controls; }

  onSubmit() { 
    this.submitted = true;
    //console.log(this.data);
    // this.orderbookupdateservice.addDetails(this.data).subscribe(res => {
    //   console.log(res);
    // }); 

  }


  constructor(private formBuilder: FormBuilder,private orderbookdetailUpdateService:orderbookupdateservice,public dialog: MatDialog,
              public dialogRef: MatDialogRef<DynamicApprovalFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data,private datePipe: DatePipe) { 
                //console.log(data.OrderId);
                this.OrderId = data.OrderId;
              }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void  { 
                 this.orderbookdetailUpdateService.getApprovalDetails(this.OrderId).subscribe((res) => {
                  console.log(res);
                  this.PCD  = this.datePipe.transform(res[0].required_pdc, 'yyyy-MM-dd');
                  this.comments = res[0].comment;
                  this.Impact = res[0].impact_type;
                  this.SMV = res[0].planning_smv;
                  this.Include = res[0].include_exclude;
                });              
  }
  onNoClick(): void {
    this.dialogRef.close();
  }



}
