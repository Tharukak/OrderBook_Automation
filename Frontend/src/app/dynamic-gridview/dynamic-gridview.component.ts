import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Owner } from './dynamic-gridview.model';
import { orderbookdetailsservice } from '../_services/oderbookdetails.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-dynamic-gridview',
  templateUrl: './dynamic-gridview.component.html',
  styleUrls: ['./dynamic-gridview.component.less']
})


export class DynamicGridviewComponent implements OnInit {
  public displayedColumns = ['OrderId', 'OrderLine', 'MONumber', 'DestinationId', 'WarehouseId', 'SKU', 'delete'];

  stickyHeader: boolean = true;
  data = [];

  fields = [

    { name: "OrderId", sticky: "start", width: 300 },

    { name: "OrderLine" },

    { name: "MONumber" },

    { name: "DestinationId" },

    { name: "WarehouseId" },

    { name: "SKU" }

    // { name: "Data_Center", header: "Data Center", display: "hiden" },

    // { name: "Intergations", header: "Intergations ", display: "hiden" },

    // { name: "Platform", header: "Platform", display: "hiden" },

    // { name: "Integrity", header: "Integrity", display: "hiden" },

    // { name: "Availability", header: "Availability", display: "hiden" },

  ];

  dataSource$ = new BehaviorSubject<Owner[]>([]);

  public dataSource = new MatTableDataSource<Owner>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private orderbookdetailsservice: orderbookdetailsservice) {
    //this.dataSource$.next(this.data);
  }

  ngOnInit(): void {
    this.getAllOwners();

  }



  public getAllOwners = () => {
    this.orderbookdetailsservice.orderdetails()
      .subscribe(res => {
        //this.dataSource.data = res as Owner[];
        this.dataSource$.next(res as Owner[]);
        //console.log(res);      
      })
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