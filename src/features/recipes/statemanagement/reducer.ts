import { initialState, State } from './state';
import { LOAD_RECIPES_SUCCESS, RecipeActionTypesUnion } from './actionTypes';

export default function reducer(state = initialState, action: RecipeActionTypesUnion): State {
    switch (action.type) {
        case LOAD_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.payload.recipes
            };
        default:
            return state;
    }
}
