import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {saga as recipeSaga} from '../features/recipes';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(recipeSaga);

export default store;
