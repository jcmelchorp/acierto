import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import {
  LoginWithGoogle,
  LoginWithGoogleFailure,
  LoginWithGoogleSuccess,
} from './../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginPageStateModel {
  error: string | null;
  pending: boolean;
}

@State<LoginPageStateModel>({
  name: 'loginPage',
  defaults: {
    error: null,
    pending: false,
  },
})
@Injectable()
export class LoginPageState {
  constructor(private authService: AuthService) { }

  @Selector()
  static getError(state: LoginPageStateModel): string {
    return state.error;
  }

  @Selector()
  static getPending(state: LoginPageStateModel): boolean {
    return state.pending;
  }

  @Action(LoginWithGoogle)
  loginWithGoogle({ dispatch, patchState }: StateContext<LoginPageStateModel>): Promise<Observable<void> | Observable<unknown>> {
    patchState({
      error: null,
      pending: true,
    });
    return this.authService.googleSignin().then(
      (user) => dispatch(new LoginWithGoogleSuccess({ user })),
      catchError((error) => {
        return dispatch(new LoginWithGoogleFailure(error));
      })
    );
  }

  @Action(LoginWithGoogleSuccess)
  loginWithGoogleSuccess({ dispatch, patchState, }: StateContext<LoginPageStateModel>): void {
    patchState({
      error: null,
      pending: false,
    });
    dispatch(new Navigate(['/']));
  }

  @Action(LoginWithGoogleFailure)
  loginWithGoogleFailure({ patchState }: StateContext<LoginPageStateModel>, action: LoginWithGoogleFailure): void {
    patchState({
      error: action.payload,
      pending: false,
    });
  }
}
