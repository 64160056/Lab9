import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    const customer: Customer = new Customer();
    customer.name = createCustomerDto.name;
    customer.gender = createCustomerDto.gender;
    customer.age = createCustomerDto.age;
    customer.tel = createCustomerDto.tel;
    return this.customersRepository.save(customer);
  }

  findAll() {
    return this.customersRepository.find();
  }

  findOne(id: number) {
    return this.customersRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customersRepository.findOneBy({ id: id });
    const updatedCustomer = { ...customer, ...updateCustomerDto };
    return this.customersRepository.save(updatedCustomer);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
