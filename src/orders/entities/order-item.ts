import { Product } from 'src/products/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  product: Product;

  @Column({
    length: '32',
  })
  name: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  amount: number;

  @Column({ type: 'float' })
  total: number;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
