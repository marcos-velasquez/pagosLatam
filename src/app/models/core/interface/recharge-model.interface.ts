import { Status } from '@app/models/core/enums/status.enum';
import { Charge } from '@app/models/core/interface/charge.interface';

export interface RechargeModel {
  status: Status;
  name: string;
  reference: string;
  photo: string;
  charge: Charge[];
  phoneNumber: string;
}
