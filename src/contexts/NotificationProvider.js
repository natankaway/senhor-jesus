import React, { useCallback, useMemo } from 'react';
import { NotificationContext } from './contexts.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { toast } from '../utils/toast.js';

// Notification Provider
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useLocalStorage('notifications', []);

  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      read: false,
      ...notification
    };
    setNotifications(prev => [newNotification, ...prev].slice(0, 50));
    
    switch (notification.type) {
      case 'success':
        toast.success(notification.message);
        break;
      case 'error':
        toast.error(notification.message);
        break;
      case 'warning':
        toast.warn(notification.message);
        break;
      default:
        console.log(notification.message);
    }
  }, [setNotifications]);

  const markAsRead = useCallback((notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  }, [setNotifications]);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
    toast.success('Notificações limpas');
  }, [setNotifications]);

  const value = useMemo(() => ({
    notifications,
    addNotification,
    markAsRead,
    clearNotifications,
    unreadCount: notifications.filter(n => !n.read).length
  }), [notifications, addNotification, markAsRead, clearNotifications]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};