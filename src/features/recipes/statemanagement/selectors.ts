import { NAME } from '../constants';
import { State } from './state';
import { createSelector } from 'reselect';

const getRecipesState = (rootState: any) => rootState[NAME];

export const getAll = createSelector(
    getRecipesState, (state: State) => state.recipes
);
