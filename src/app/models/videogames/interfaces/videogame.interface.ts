import { RechargeModel } from '@app/models/core/interfaces/recharge-model.interface';

export interface VideoGame extends RechargeModel {
  playerId: string;
  additionalField: string;
}
