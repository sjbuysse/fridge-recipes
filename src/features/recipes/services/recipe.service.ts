import { Recipe } from '../model';
import fetchJsonp from 'fetch-jsonp';

export const getRecipesByIngredients = (ingredients: string[]): Promise<{ recipes: Recipe[] } | { error: any }> =>
    fetchJsonp(`http://www.recipepuppy.com/api/?i=${ingredients.join(',')}`, {
        jsonpCallbackFunction: `jsonpCallbackFunction`
    })
        .then((res: { ok: boolean, json: () => any }) => res.json())
        .then((json: { results: Recipe[] }) => ({recipes: json.results}))
        .catch(error => ({error}));


