import { IsNotEmpty, Length, IsPositive } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @Length(4, 16)
  name: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  @IsPositive()
  age: number;

  @IsNotEmpty()
  @Length(9)
  tel: string;
}
