import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Owner } from '@app/dynamic-gridview/dynamic-gridview.model';
import { BehaviorSubject } from 'rxjs';
import { orderbookdetailsservice } from '../_services/oderbookdetails.service';


@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.less']
})
export class ReportFormComponent implements OnInit {

  public displayedColumns = ['OrderId', 'OrderLine', 'MONumber', 'DestinationId',
    'WarehouseId', 'SKU', 'Packing Term', 'MPO', 'Status', 'RequestedDeliveryDate', 'PlannedDate',
    'ConfirmedDeliveryDate', 'RequestedDeliveryDate_M3', 'PlannedDate_M3', 'ConfirmedDeliveryDate_M3', 'StyleNo', 'DeliveryMethod',
    'OrderedQuantity', 'DeliveredQuantityAltUM', 'InvoicedQuantityAltUM', 'PickingListQuantityAltUM', 'AttributeValueDisplayField6',
    'DeliveredQuantityBasicUM', 'InvoicedQuantityBasicUM', 'TransactionReason', 'CustomerStyle', 'Description', 'BuyerId',
    'BuyerDivisionId', 'BasicUOM', 'ItemType', 'ProductGroup', 'ProcumentGroup', 'GroupTechClass', 'ColorId', 'ColorName',
    'Range', 'CPO', 'ZFeatureId', 'Season', 'SalesPrice', 'OrderDate_M3', 'CustomerOrderType', 'ScheduleId', 'TargetValueString'];

  stickyHeader: boolean = true;
  data = [];

  fields = [

    { name: "OrderId", sticky: "start", width: 300 },
    { name: "OrderLine" },
    { name: "MONumber" },
    { name: "DestinationId" },
    { name: "WarehouseId" },
    { name: "SKU" },
    { name: "Packing Term" },
    { name: "MPO" },
    { name: "Status" },
    { name: "RequestedDeliveryDate" },
    { name: "PlannedDate" },
    { name: "ConfirmedDeliveryDate" },
    { name: "RequestedDeliveryDate_M3" },
    { name: "PlannedDate_M3" },
    { name: "ConfirmedDeliveryDate_M3" },
    { name: "StyleNo" },
    { name: "DeliveryMethod" },
    { name: "OrderedQuantity" },
    { name: "DeliveredQuantityAltUM" },
    { name: "InvoicedQuantityAltUM" },
    { name: "PickingListQuantityAltUM" },
    { name: "AttributeValueDisplayField6" },
    { name: "DeliveredQuantityBasicUM" },
    { name: "InvoicedQuantityBasicUM" },
    { name: "TransactionReason" },
    { name: "CustomerStyle" },
    { name: "Description" },
    { name: "BuyerId" },
    { name: "BuyerDivisionId" },
    { name: "ItemType" },
    { name: "ProductGroup" },
    { name: "ProcumentGroup" },
    { name: "GroupTechClass" },
    { name: "ColorId" },
    { name: "ColorName" },
    { name: "Range" },
    { name: "ZFeatureId" },
    { name: "Season" },
    { name: "SalesPrice" },
    { name: "OrderDate_M3" },
    { name: "CustomerOrderType" },
    { name: "ScheduleId" },
    { name: "TargetValueString" },



    // { name: "Data_Center", header: "Data Center", display: "hiden" },

  ];


  //dataSchema = USER_SCHEMA;
  dataSource$ = new BehaviorSubject<Owner[]>([]);



  public dataSource = new MatTableDataSource<Owner>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private orderbookdetailsservice: orderbookdetailsservice,
    private router: Router) {
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
