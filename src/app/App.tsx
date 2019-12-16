import React, { Fragment } from 'react';
import { SnackbarContainer } from '../features/snackbar';
import { components as recipeComponents } from '../features/recipes';

const App: React.FC = () => {
    return (
        <Fragment>
            <SnackbarContainer/>
            <recipeComponents.SearchFormContainer/>
        </Fragment>
    );
}

export default App;
