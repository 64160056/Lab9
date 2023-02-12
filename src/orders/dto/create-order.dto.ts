import { IsNotEmpty, IsPositive, Length } from 'class-validator';
class CreateOrderItemDto {
  @IsNotEmpty()
  productId: number;
  @IsNotEmpty()
  amount: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  customerId: number;
  @IsNotEmpty()
  orderItems: CreateOrderItemDto[];
}
