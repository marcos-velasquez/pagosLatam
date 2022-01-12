import { Status } from '@core/enums/status.enum';
import { Charge } from '@core/interfaces/charge.interface';

export interface Streaming {
  id: string;
  name: string;
  phoneNumber: string;
  charge: Charge[];
  reference: string;
  photo: string;
  status: Status;
}
