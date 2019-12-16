import { Recipe } from '../model/recipe.interface';

export const FORM_SUBMITTED = "[SearchFormContainer] search form submitted";
export const RECIPES_REQUESTED = "[recipes Sagas] Recipes requested";
export const LOAD_RECIPES_SUCCESS = "[recipes Sagas] Load recipes success";
export const LOAD_RECIPES_FAIL = "[recipes Sagas] Load recipes fail";

export interface FormSubmittedAction {
    type: typeof FORM_SUBMITTED,
    payload: {
        query: string
    }
}

export interface RecipesRequestedAction {
    type: typeof RECIPES_REQUESTED,
    payload: {
        ingredients: string[]
    }
}

export interface LoadRecipesSuccessAction {
    type: typeof LOAD_RECIPES_SUCCESS,
    payload: {
        recipes: Recipe[]
    }
}

export interface LoadRecipesFailAction {
    type: typeof LOAD_RECIPES_FAIL,
    payload: {
        error: any
    }
}

export type RecipeActionTypesUnion =
    FormSubmittedAction
    | RecipesRequestedAction
    | LoadRecipesFailAction
    | LoadRecipesSuccessAction
