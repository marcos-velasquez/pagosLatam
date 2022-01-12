import { Status } from '@app/models/core/enums/status.enum';
import { Charge } from '@app/models/core/interface/charge.interface';

export interface Streaming {
  id: string;
  name: string;
  phoneNumber: string;
  charge: Charge[];
  reference: string;
  photo: string;
  status: Status;
}
