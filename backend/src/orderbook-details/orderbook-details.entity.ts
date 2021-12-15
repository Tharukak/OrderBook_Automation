import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orderbook {
  @PrimaryGeneratedColumn()
  OrderId: number;

  @Column('int')
  OrderLine: number;

  @Column('int')
  MONumber: number;

  @Column({ length: 100 })
  DestinationId: string;

  @Column({ length: 100 })
  WarehouseId: string;

  @Column({ length: 100 })
  SKU: string;

  @Column({ length: 100 })
  PackingTerm: string;

  @Column({ length: 100 })
  MPO: string;

  @Column({ length: 100 })
  Status: string;

  @Column()
  RequestedDeliveryDate: Date;

  @Column()
  PlannedDate: Date;

  @Column()
  ConfirmedDeliveryDate: Date;

  @Column()
  RequestedDeliveryDate_M3: number;

  @Column('int')
  PlannedDate_M3: number;

  @Column('int')
  ConfirmedDeliveryDate_M3: number;

  @Column({ length: 10 })
  StyleNo: string;

  @Column({ length: 10 })
  DeliveryMethod: string;

  @Column('int')
  OrderedQuantity: number;

  @Column('int')
  DeliveredQuantityAltUM: number;

  @Column('int')
  InvoicedQuantityAltUM: number;

  @Column('int')
  PickingListQuantityAltUM: number;

  @Column({ length: 200 })
  AttributeValueDisplayField6: string;

  @Column('int')
  DeliveredQuantityBasicUM: number;

  @Column('int')
  InvoicedQuantityBasicUM: number;

  @Column({ length: 200 })
  TransactionReason: string;

  @Column({ length: 100 })
  CustomerStyle: string;


  @Column({ length: 300 })
  Description: string;

  @Column({ length: 100 })
  BuyerId: string;

  @Column({ length: 100 })
  BuyerDivisionId: string;

 
  @Column({ length: 100 })
  BasicUOM: string;

  @Column({ length: 100 })
  ItemType: string;

  @Column({ length: 100 })
  ProductGroup: string;

  @Column({ length: 100 })
  ProcumentGroup: string;

  @Column({ length: 100 })
  GroupTechClass: string;

  @Column({ length: 100 })
  ColorId: string;

  @Column({ length: 100 })
  ColorName: string;

}