import { Controller, Post, Body } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Get } from '@nestjs/common';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() body: any) {
    return this.patientsService.create(body);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }
}
