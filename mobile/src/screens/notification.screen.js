import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';

interface Notification {
  id: number;
  message: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  { id: 1, message: 'You have a new follower', isRead: true },
  { id: 2, message: 'Your post has been liked', isRead: false },
  { id: 3, message: 'You have a new message', isRead: false },
];

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notificationList, setNotifications] = useState(notifications);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleMarkAsRead = (id: number) => {
    const updatedNotifications = notificationList.map((notification) =>
      notification.id === id ? { ...notification, isRead: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  const filteredNotifications =
    activeTab === 'all'
      ? notificationList
      : activeTab === 'unread'
      ? notificationList.filter((notification) => !notification.isRead)
      : [];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Notifications</Text>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <TouchableOpacity
          style={{ marginRight: 8, ...(activeTab === 'all' ? { fontWeight: 'bold' } : { fontWeight: 'normal' }) }}
          onPress={() => handleTabClick('all')}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 8,
            ...(activeTab === 'unread' ? { fontWeight: 'bold' } : { fontWeight: 'normal' }),
          }}
          onPress={() => handleTabClick('unread')}
        >
          <Text>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 8,
            ...(activeTab === 'see-all' ? { fontWeight: 'bold' } : { fontWeight: 'normal' }),
          }}
          onPress={() => handleTabClick('see-all')}
        >
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      {filteredNotifications.length === 0 ? (
        <Text>No notifications</Text>
      ) : (
        <FlatList
          data={filteredNotifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                marginBottom: 8,
                borderRadius: 8,
                backgroundColor: item.isRead ? '#CCCCCC' : '#FFFFFF',
              }}
            >
              <Text>{item.message}</Text>
              {!item.isRead && (
                <TouchableOpacity onPress={() => handleMarkAsRead(item.id)}>
                  <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Mark as read</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
};

export default NotificationPage;
