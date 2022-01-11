import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@core/models/users/interfaces/user.interface';

@Pipe({
  name: 'avatarLabel',
})
export class AvatarLabelPipe implements PipeTransform {
  transform(user: User, ...args: unknown[]): string {
    return user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'IN';
  }
}
