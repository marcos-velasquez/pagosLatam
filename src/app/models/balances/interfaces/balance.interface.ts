import { RechargeModel } from '@app/models/core/interfaces/recharge-model.interface';

export interface Balance extends RechargeModel {
  phoneTarget: string;
}
