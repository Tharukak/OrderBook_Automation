import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Orderbook } from './orderbook-details.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderbookService {
  constructor(
    @InjectRepository(Orderbook)
    private orderbookRepository: Repository<Orderbook>,
  ) {}

  async findAll(): Promise<Orderbook[]> {
    // return this.orderbookRepository.find();
    return await this.orderbookRepository.query(`EXECUTE get_orderbook_details`);    
  }

  async getBuyers(): Promise<Orderbook[]>{
    return await this.orderbookRepository.query(`EXECUTE get_orderbook_buyers`);    
  } 
}