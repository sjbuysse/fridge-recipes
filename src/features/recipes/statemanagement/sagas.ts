import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects'
import * as RecipeActionTypes from './actionTypes';
import { actions as snackbarActions } from '../../snackbar';
import { FormSubmittedAction, LoadRecipesFailAction, LoadRecipesSuccessAction } from './actionTypes';
import { loadRecipeFail, loadRecipesSuccess } from './actions';
import { getRecipesByIngredients } from '../services/recipe.service';

function* fetchRecipes(action: FormSubmittedAction) {
    const {query} = action.payload;
    const ingredientParams = splitOnCommaAndSpaces(query);
    const {recipes, error} = yield call(getRecipesByIngredients, ingredientParams);

    if (recipes) {
        yield put(loadRecipesSuccess(recipes));
    } else if (error) {
        yield put(loadRecipeFail(error))
    }
}

function* addNotificationForLoadRecipeFail(action: LoadRecipesFailAction) {
    yield addNotification(action.payload.error.message);
}

function* addNotificationWhenEmptyRecipes(action: LoadRecipesSuccessAction) {
    const {recipes} = action.payload;
    if (recipes && recipes.length === 0) {
        yield addNotification('We could not find any recipes')
    }
}

function* addNotification(message: string) {
    yield put(snackbarActions.error(message))
}

export default function* recipesSaga() {
    yield all([
        takeLatest([RecipeActionTypes.FORM_SUBMITTED], fetchRecipes),
        takeLatest([RecipeActionTypes.LOAD_RECIPES_SUCCESS], addNotificationWhenEmptyRecipes),
        takeEvery([RecipeActionTypes.LOAD_RECIPES_FAIL], addNotificationForLoadRecipeFail)
    ])
}

function splitOnCommaAndSpaces(query: string): string[] {
    return query.split(/[ ,]+/);
}
