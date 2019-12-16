import {
    LOAD_RECIPES_FAIL,
    LOAD_RECIPES_SUCCESS,
    RECIPES_REQUESTED,
    FORM_SUBMITTED, FormSubmittedAction, RecipesRequestedAction, LoadRecipesFailAction, LoadRecipesSuccessAction
} from './actionTypes';
import { Recipe } from '../model/recipe.interface';


export const formSubmitted = (query: string): FormSubmittedAction => ({
    type: FORM_SUBMITTED,
    payload: {
        query
    }
});

export const recipeRequested = (ingredients: string[]): RecipesRequestedAction => ({
    type: RECIPES_REQUESTED,
    payload: {
        ingredients
    }
});

export const loadRecipeFail = (error: Error): LoadRecipesFailAction => ({
    type: LOAD_RECIPES_FAIL,
    payload: {
        error
    }
});

export const loadRecipesSuccess = (recipes: Recipe[]): LoadRecipesSuccessAction => ({
    type: LOAD_RECIPES_SUCCESS,
    payload: {
        recipes
    }
});

