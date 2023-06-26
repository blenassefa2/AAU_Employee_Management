import { useState } from "react";
import { GetServerSideProps } from "next";
import { useMyNotificationQuery } from "@/redux/slices/users/usersApiSlice";
import Layout from "@/components/Layout/Layout";

interface Notification {
  sender: string;
  receiver: string;
  description: string;
  title: string;
  isRead: boolean;
}

interface NotificationsPageProps {
  notifications: Notification[];
}

const PAGE_SIZE = 3;

const NotificationsPage: React.FC<NotificationsPageProps> = () => {
  const { data, isLoading, isSuccess, isError, error } = useMyNotificationQuery(
    {}
  );
  if (!isSuccess) return <></>;
  const notifications = data.data;
  if (notifications.length == 0)
    return (
      <div className="min-h-screen bg-white">
        <Layout page="employee">
          <div className="flex items-center justify-center my-[20%]">
            <div className="flex bg-gray-500  w-[80%] items-center justify-center text-white px-4 py-2 rounded">
              No notifications to see
            </div>
          </div>
        </Layout>
      </div>
    );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(notifications.length / PAGE_SIZE);
  const paginatedNotifications = notifications.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const markAsRead = (notification: Notification) => {
    // Logic for marking notification as read
  };

  const deleteNotification = (notification: Notification) => {
    // Logic for deleting notification
  };

  function viewMore(notification: Notification): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Layout page="employee">
        <div className="bg-white p-4">
          <h1 className="text-2xl text-black font-bold mb-4">Notifications</h1>
          {paginatedNotifications.map(
            (notification: Notification, index: number) => (
              <div
                key={index}
                className="bg-gray-100 rounded w-[80%] p-4 shadow mb-4"
              >
                <h2 className="text-lg font-semibold">{notification.title}</h2>
                <p className="text-gray-600">
                  {notification.description.slice(0, 4)}
                </p>
                <p className="text-sm text-gray-500">
                  From: {notification.sender}
                </p>
                <p className="text-sm text-gray-500">
                  To: {notification.receiver}
                </p>
                <div className="flex justify-end mt-2">
                  <button
                    className="px-4 py-2 mr-2 rounded bg-primary text-white"
                    onClick={() => markAsRead(notification)}
                  >
                    Mark as Read
                  </button>
                  <button
                    className="px-4 py-2 mr-2 rounded bg-primary text-white"
                    onClick={() => viewMore(notification)}
                  >
                    View More
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-red-600 text-white"
                    onClick={() => deleteNotification(notification)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`px-2 py-1 mx-1 rounded ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-secondary text-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default NotificationsPage;
