import { RechargeModel } from '@app/models/core/interface/recharge-model.interface';

export interface VideoGame extends RechargeModel {
  playerId: string;
  additionalField: string;
}
