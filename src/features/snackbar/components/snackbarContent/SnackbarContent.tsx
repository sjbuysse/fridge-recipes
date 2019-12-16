import React, { useEffect } from 'react';
import { Notification } from '../../model';
import './SnackbarContent.scss'

interface Props {
    notification: Notification;
    clearNotification: (notification: Notification) => void;
}

const SnackbarContent = ({notification, clearNotification}: Props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            clearNotification(notification)
        }, 3000);
        return () => clearTimeout(timer);
    }, [notification, clearNotification]);
    return (
        <div className={`snackbar__content snackbar__content--${notification.type.toLocaleLowerCase()}`}>
            {notification.message}
            <span className={'snackbar__content-closebutton'}
                  onClick={() => clearNotification(notification)}>&times;</span>
        </div>
    )
}

export default SnackbarContent;
