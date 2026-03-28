import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './schemas/patient.schema';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
  ) {}

  async create(data: any) {
    const patient = new this.patientModel(data);
    return patient.save();
  }

  async findAll() {
    return this.patientModel.find();
  }
}
