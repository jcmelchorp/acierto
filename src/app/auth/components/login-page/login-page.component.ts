import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { LoginWithGoogle, Logout, LoginPageState, AuthStatusState } from '../../store';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LoginPageComponent {
  @Select(LoginPageState.getPending) pending$: Observable<boolean>;
  @Select(LoginPageState.getError) error$: Observable<string>;
  @Select(AuthStatusState.getLoggedIn) IsLoggedIn$: Observable<boolean>;
  @Select(AuthStatusState.getUser) user$: Observable<User>;

  constructor(private store: Store) { }

  onLoginWithGoogle(): void {
    this.store.dispatch(new LoginWithGoogle());
  }

  onSignOut(): void {
    this.store.dispatch(new Logout());
  }
}
