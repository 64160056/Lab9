import { IsNotEmpty, IsPositive, Length } from 'class-validator';

export class CreateProductDto {
  @Length(4, 16)
  name: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;
}
