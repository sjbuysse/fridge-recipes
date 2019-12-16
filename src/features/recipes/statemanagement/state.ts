import { Recipe } from '../model/recipe.interface';

export interface State {
    recipes: Recipe[];
}

export const initialState: State = {
    recipes: []
};
