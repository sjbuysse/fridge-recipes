import { Notification } from './model/notification.interface';

export const SUCCESS = "[snackbar public API] A success occurred";
export const ERROR = "[snackbar public API] An error occurred";
export const WARNING = "[snackbar public API] A warning was dispatched";
export const CLEAR_NOTIFICATION_REQUESTED = "[SnackbarContainer] Clear notice requested";

interface SuccessAction {
    type: typeof SUCCESS,
    payload: {
        message: string
    }
}

interface ErrorAction {
    type: typeof ERROR,
    payload: {
        message: string
    }
}

interface WarningAction {
    type: typeof WARNING,
    payload: {
        message: string
    }
}

interface ClearNotificiationRequestedAction {
    type: typeof CLEAR_NOTIFICATION_REQUESTED,
    payload: {
        notification: Notification
    }
}

export type SnackbarActionTypes = SuccessAction | ErrorAction | WarningAction | ClearNotificiationRequestedAction
