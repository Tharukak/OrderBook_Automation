import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Owner } from './dynamic-gridview.model';



@Component({
  selector: 'app-dynamic-gridview',
  templateUrl: './dynamic-gridview.component.html',
  styleUrls: ['./dynamic-gridview.component.less']
})

export class DynamicGridviewComponent  {
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
];
public dataSource = new MatTableDataSource<Owner>();
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { 
  }

  ngOnInit(): void {
    this.getAllOwners();
  }
  public getAllOwners = () => {
    // this.repoService.getData('api/owner')
    // .subscribe(res => {
    //   this.dataSource.data = res as Owner[];
    // })
  }
  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {  
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}