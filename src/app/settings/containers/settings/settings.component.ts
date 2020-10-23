import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { AuthStatusState, Logout } from '../../../auth/store';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  @Select(AuthStatusState.getLoggedIn) IsLoggedIn$: Observable<boolean>;
  @Select(AuthStatusState.getUser) user$: Observable<User>;

  constructor(private store: Store) { }

  onSignOut(): void {
    this.store.dispatch(new Logout());
  }
}
