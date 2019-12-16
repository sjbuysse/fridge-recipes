import React, { Fragment } from 'react';
import { SnackbarContainer } from '../features/snackbar';
import { SearchFormContainer } from '../features/recipes';

const App: React.FC = () => {
    return (
        <Fragment>
            <SnackbarContainer/>
            <SearchFormContainer />
        </Fragment>
    );
}

export default App;
