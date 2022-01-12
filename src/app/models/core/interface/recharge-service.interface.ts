import { DocumentData, DocumentReference } from 'firebase/firestore';

export interface RechargeService<T> {
  create(data: T): Promise<DocumentReference<DocumentData>>;
}
