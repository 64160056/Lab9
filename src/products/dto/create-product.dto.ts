import { IsNotEmpty, IsPositive, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(40)
  name: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;
}
