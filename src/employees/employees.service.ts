import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
    private employees = [
      {
        id: 1,
        name:'Alberto',
        lastName:'García',
        phoneNumber:'123456789'
      },
      {
        id: 2,
        name:'María',
        lastName:'López',
        phoneNumber:'987654321'
      }
      ];
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = this.employees.length +1;
    this.employees.push(createEmployeeDto);
    return createEmployeeDto;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.filter(employee => employee.id === id)[0];
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    this.employees = this.employees.filter(employee => employee.id !== id);
    return this.employees;
}
}
