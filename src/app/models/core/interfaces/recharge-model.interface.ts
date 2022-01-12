import { Status } from '@app/models/core/enums/status.enum';
import { Charge } from '@app/models/core/interfaces/charge.interface';

export interface RechargeModel {
  status: Status;
  name: string;
  reference: string;
  photo: string;
  charge: Charge[];
  phoneNumber: string;
  userId?: string;
}
