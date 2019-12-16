import { NAME } from '../constants';
import { State } from './state';
import { createSelector } from 'reselect';

const getSnackbarState = (rootState: any) => rootState[NAME];

export const getAll = createSelector(
    getSnackbarState, (state: State) => state.snackbar
);
