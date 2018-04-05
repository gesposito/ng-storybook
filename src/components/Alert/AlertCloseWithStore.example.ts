import { Component } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { createSelector } from "reselect";

interface RootState {
  root: State;
}

interface State {
  closed: boolean;
}

const initialState: State = {
  closed: false
};

export const getRootState = (state: RootState) => state.root;
export const getClosed = (state: State) => state.closed;
export const getClosedState = createSelector(getRootState, getClosed);

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case "TOGGLE": {
      return {
        ...state,
        closed: !state.closed
      };
    }
    default: {
      return state;
    }
  }
}

@Component({
  selector: "abi-alert-close-store",
  templateUrl: `AlertCloseWithStore.example.html`
})
export class AlertCloseWithStore {
  closed$: Observable<boolean>;

  constructor(private store: Store<RootState>) {
    this.closed$ = store.select(getClosedState);
  }

  onClose() {
    this.store.dispatch({ type: "TOGGLE" });
  }
}
