import { RechargeModel } from '@app/models/core/interface/recharge-model.interface';

export interface Balance extends RechargeModel {
  phoneTarget: string;
}
