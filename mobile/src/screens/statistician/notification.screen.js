import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Replace useMyNotificationQuery with your own logic
const useMyNotificationQuery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ data: [] });

  // Replace with your own logic to fetch notifications
  const fetchNotifications = async () => {
    try {
      // Fetch notifications data
      const response = await fetch('API_ENDPOINT');
      const data = await response.json();

      // Update state
      setIsLoading(false);
      setIsSuccess(true);
      setData(data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  };

  // Call fetchNotifications when component mounts
  useEffect(() => {
    fetchNotifications();
  }, []);

  return { data, isLoading, isSuccess, isError, error };
};

const Home = () => {
  const { data, isLoading, isSuccess } = useMyNotificationQuery();
  if (!isSuccess) return null;

  const notifications = data.data;

  if (notifications.length === 0) {
    return (
      <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>No notifications to see</Text>
      </View>
    );
  }

  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 3;
  const totalPages = Math.ceil(notifications.length / PAGE_SIZE);
  const paginatedNotifications = notifications.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const markAsRead = (notification) => {
    // Logic for marking notification as read
  };

  const deleteNotification = (notification) => {
    // Logic for deleting notification
  };

  const viewMore = (notification) => {
    // Logic for viewing more details of a notification
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Notifications
        </Text>
        {paginatedNotifications.map((notification, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#eee',
              borderRadius: 5,
              padding: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {notification.title}
            </Text>
            <Text style={{ color: 'gray' }}>
              {notification.description.slice(0, 4)}
            </Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>
              From: {notification.sender}
            </Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>
              To: {notification.receiver}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Button
                title="Mark as Read"
                onPress={() => markAsRead(notification)}
              />
              <Button
                title="View More"
                onPress={() => viewMore(notification)}
              />
              <Button
                title="Delete"
                onPress={() => deleteNotification(notification)}
              />
            </View>
          </View>
        ))}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <Button
              key={page}
              title={String(page)}
              onPress={() => handlePageChange(page)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Home;
