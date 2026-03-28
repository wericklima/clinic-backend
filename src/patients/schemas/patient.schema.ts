import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  age!: number;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop()
  phone!: string;

  @Prop({ default: Date.now })
  createdAt!: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
