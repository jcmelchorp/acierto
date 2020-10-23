import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CloseSidenav, OpenSidenav } from '../actions/layout.action';

export interface LayoutStateModel {
  showSidenav: boolean;
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    showSidenav: false,
  },
})
@Injectable()
export class LayoutState {
  @Selector()
  static getShowSidenav(state: LayoutStateModel): boolean {
    return state.showSidenav;
  }

  @Action(OpenSidenav)
  openSidenav({ patchState }: StateContext<LayoutStateModel>): void {
    patchState({
      showSidenav: true,
    });
  }

  @Action(CloseSidenav)
  closeSidenav({ patchState }: StateContext<LayoutStateModel>): void {
    patchState({
      showSidenav: false,
    });
  }
}
