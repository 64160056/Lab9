import { IsNotEmpty, IsPositive, MinLength } from 'class-validator';
export class CreateCustomerDto {
  @MinLength(5)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @MinLength(10)
  @IsNotEmpty()
  tel: string;

  @MinLength(1)
  @IsNotEmpty()
  gender: string;
}
