import { combineReducers } from 'redux';
import * as notifications from '../features/snackbar';

export default combineReducers({
    [notifications.constants.NAME]: notifications.reducer
});
