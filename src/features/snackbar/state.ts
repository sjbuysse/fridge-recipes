import { createNotification, Notification, NotificationType } from './model/notification.interface';

export interface State {
    snackbar: Notification[];
}

export const initialState: State = {
    snackbar: [createNotification('This is a tester notification', NotificationType.SUCCESS)],
};
