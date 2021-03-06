import React, { Dispatch } from 'react';
import { Notification } from '../../model/notification.interface';
import { connect } from 'react-redux';
import { getAll } from '../../selectors';
import './SnackbarContainer.scss';
import SnackbarContent from '../SnackbarContent/SnackbarContent';
import { clearNotification } from '../../actions';
import { SnackbarActionTypes } from '../../actionTypes';

interface Props {
    notifications: Notification[];
    clearNotification: (notification: Notification) => void;
}

const SnackbarContainer = ({notifications, clearNotification}: Props) => {
    return (
        notifications.length > 0
            ? (<div className="snackbar"><SnackbarContent clearNotification={clearNotification}
                                                          notification={notifications[0]}></SnackbarContent>
            </div>)
            : null
    );
};

const mapStateToProps = (state: any) => ({
    notifications: getAll(state)
});

const mapDispatchToProps = (dispatch: Dispatch<SnackbarActionTypes>) => ({
    clearNotification: (notification: Notification) => dispatch(clearNotification(notification)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarContainer);
