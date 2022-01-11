import { User } from '@core/models/users/interfaces/user.interface';

export class UserBuilder implements User {
  id: string;
  email: string;
  displayName: string;
  phoneNumber: string | null;

  constructor(user: Omit<User, 'id'> & { uid: string }) {
    this.id = user.uid;
    this.email = user.email;
    this.displayName = user.displayName;
    this.phoneNumber = user.phoneNumber;
  }
}
