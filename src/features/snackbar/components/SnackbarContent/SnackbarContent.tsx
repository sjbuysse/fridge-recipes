import React from 'react';
import { Notification } from '../../model/notification.interface';
import './SnackbarContent.scss'

interface Props {
    notification: Notification;
    clearNotification: (notification: Notification) => void;
}

const SnackbarContent = ({notification, clearNotification}: Props) => {
    return (
        <div className={`snackbar__content snackbar__content--${notification.type.toLocaleLowerCase()}`}>
            {notification.message}
            <span className={'snackbar__content-closebutton'} onClick={() => clearNotification(notification)}>&times;</span>
        </div>
    )
}

export default SnackbarContent;
