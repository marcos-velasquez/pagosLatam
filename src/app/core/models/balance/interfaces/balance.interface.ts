export interface Charge {
  name: string;
  price: number;
}

export interface Balance {
  name: string;
  phoneNumber: string;
  phoneTarget: string;
  reference: string;
  photo: string;
  charge: Charge[];
}
