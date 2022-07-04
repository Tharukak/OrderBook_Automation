import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateFields } from './update-fields';
import { FormBuilder, FormGroup } from '@angular/forms';
import { orderbookupdateservice } from '../_services/orderbookupdate.service';


@Component({
  selector: 'app-dynamic-update-form',
  templateUrl: './dynamic-update-form.component.html',
  styleUrls: ['./dynamic-update-form.component.less']
})
export class DynamicUpdateFormComponent {

  @Input() formInputs;
  form: FormGroup;
  model = new UpdateFields(18, '', '', '', '', '');
  OrderId: string = '';
  payLoad = '';
  get f() { return this.form.controls; }
  submitted = false;


  


  newHero() {
    this.model = new UpdateFields(42, '', '', '', '', '');
  }

  skyDog(): UpdateFields {
    const myHero = new UpdateFields(42, '', '', '', '', '');
    console.log('My hero is called ' + myHero.Impact); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }

  ///////////////////////////


  constructor(private formBuilder: FormBuilder, public dialog: MatDialog,private orderbookupdateservice:orderbookupdateservice,
    public dialogRef: MatDialogRef<DynamicUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      //console.log(data.MONumber);
      this.OrderId = data.OrderId;
    }
    onSubmit() {
      this.submitted = true;
      //console.log(this.data);
      this.orderbookupdateservice.addDetails(this.data).subscribe(res => {
        console.log(res);
      });
    }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.form = this.formBuilder.group({
      //username: ['', Validators.required],
      //password: ['', Validators.required]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
