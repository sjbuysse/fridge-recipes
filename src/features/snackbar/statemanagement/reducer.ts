import { initialState, State } from './state';
import { CLEAR_NOTIFICATION, ERROR, SnackbarActionTypes, SUCCESS, WARNING } from './actionTypes';
import { createNotification, NotificationType } from '../model/notification.interface';

export default function reducer(state = initialState, action: SnackbarActionTypes): State {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                snackbar: [...state.snackbar, createNotification(action.payload.message, NotificationType.SUCCESS)],
            };
        case ERROR:
            return {
                ...state,
                snackbar: [...state.snackbar, createNotification(action.payload.message, NotificationType.ERROR)],
            };
        case WARNING:
            return {
                ...state,
                snackbar: [...state.snackbar, createNotification(action.payload.message, NotificationType.WARNING)],
            };
        case CLEAR_NOTIFICATION:
            return {
                ...state,
                snackbar: state.snackbar.filter(notification => notification !== action.payload.notification),
            };
        default: {
            return state;
        }
    }
}
