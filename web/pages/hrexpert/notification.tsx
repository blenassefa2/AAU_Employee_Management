import { useState } from "react";

interface Notification {
  id: number;
  message: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  { id: 1, message: "You have a new follower", isRead: true },
  { id: 2, message: "Your post has been liked", isRead: false },
  { id: 3, message: "You have a new message", isRead: false },
];

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("all");
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
    activeTab === "all"
      ? notificationList
      : activeTab === "unread"
      ? notificationList.filter((notification) => !notification.isRead)
      : [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="flex mb-4">
        <button
          className={`mr-4 ${
            activeTab === "all" ? "font-bold" : "font-medium"
          }`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`mr-4 ${
            activeTab === "unread" ? "font-bold" : "font-medium"
          }`}
          onClick={() => handleTabClick("unread")}
        >
          Unread
        </button>
        <button
          className={`mr-4 ${
            activeTab === "see-all" ? "font-bold" : "font-medium"
          }`}
          onClick={() => handleTabClick("see-all")}
        >
          See All
        </button>
      </div>
      {filteredNotifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {filteredNotifications.map((notification) => (
            <li
              key={notification.id}
              className={`py-2 px-4 mb-2 rounded-lg ${
                notification.isRead ? "bg-gray-200" : "bg-white"
              }`}
            >
              <p>{notification.message}</p>
              {!notification.isRead && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  Mark as read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPage;
