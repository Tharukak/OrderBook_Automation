import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateFields } from './update-fields';

@Component({
  selector: 'app-dynamic-update-form',
  templateUrl: './dynamic-update-form.component.html',
  styleUrls: ['./dynamic-update-form.component.less']
})
export class DynamicUpdateFormComponent {


  model = new UpdateFields(18, '', '','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new UpdateFields(42, '','','','','');
  }

  skyDog(): UpdateFields {
    const myHero =  new UpdateFields(42, '','','','','');
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


  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DynamicUpdateFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
