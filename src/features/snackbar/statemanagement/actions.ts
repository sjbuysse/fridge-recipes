import { CLEAR_NOTIFICATION, ERROR, SnackbarActionTypes, SUCCESS, WARNING } from "./actionTypes";
import { Notification } from '../model/notification.interface';


export const success = (message: string): SnackbarActionTypes => ({
    type: SUCCESS,
    payload: {
        message
    }
});

export const clearNotification = (notification: Notification): SnackbarActionTypes => ({
    type: CLEAR_NOTIFICATION,
    payload: {
        notification
    }
});

export const error = (message: string): SnackbarActionTypes => ({
    type: ERROR,
    payload: {
        message
    }
});

export const warning = (message: string): SnackbarActionTypes => ({
    type: WARNING,
    payload: {
        message
    }
});

