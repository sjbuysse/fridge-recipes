import { combineReducers } from 'redux';
import * as snackbar from '../features/snackbar';
import * as recipes from '../features/recipes';

export default combineReducers({
    [snackbar.constants.NAME]: snackbar.reducer,
    [recipes.constants.NAME]: recipes.reducer
});
