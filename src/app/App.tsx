import React, { Fragment } from 'react';
import { components as snackbarComponents } from '../features/snackbar';
import { components as recipeComponents } from '../features/recipes';
import './App.scss'

const App: React.FC = () => {
    return (
        <Fragment>
            <snackbarComponents.SnackbarContainer/>
            <recipeComponents.SearchFormContainer/>
            <recipeComponents.RecipeListContainer/>
        </Fragment>
    );
}

export default App;
