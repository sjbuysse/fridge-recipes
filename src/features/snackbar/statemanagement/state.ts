import { Notification } from '../model/notification.interface';

export interface State {
    snackbar: Notification[];
}

export const initialState: State = {
    snackbar: [],
};
