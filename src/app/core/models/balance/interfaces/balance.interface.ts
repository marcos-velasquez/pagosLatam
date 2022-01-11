import { Status } from '@core/enums/status.enum';
import { Charge } from '@core/interfaces/charge.interface';

export interface Balance {
  name: string;
  phoneNumber: string;
  phoneTarget: string;
  reference: string;
  photo: string;
  charge: Charge[];
  status: Status;
}
