import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@models/users/interfaces/user.interface';

@Pipe({
  name: 'credentialLabel',
})
export class CredentialLabelPipe implements PipeTransform {
  transform(user: User, ...args: unknown[]): string {
    return user?.displayName || user?.email || 'INVITADO';
  }
}
