export interface Notification {
    message: string;
    type: NotificationType;
}

export function createNotification(message: string, type: NotificationType) {
    return {
        message,
        type,
    };
}

export enum NotificationType {
    ERROR = 'Error',
    WARNING = 'Warning',
    SUCCESS = 'Success',
}
