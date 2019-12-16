import { initialState, State } from './state';
import { RecipeActionTypesUnion } from './actionTypes';

export default function reducer(state = initialState, action: RecipeActionTypesUnion): State {
    switch (action.type) {
        default:
            return state;
    }
}
