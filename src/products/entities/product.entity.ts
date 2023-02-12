import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: '32',
  })
  name: string;

  @Column({
    type: 'float',
  })
  price: number;
}
