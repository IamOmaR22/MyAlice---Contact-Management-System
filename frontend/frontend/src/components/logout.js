import React, { useEffect } from "react";
import axiosInstance from "../axios";

export default function Logout() {
  useEffect(() => {
    const logout = async () => {
      try {
        await axiosInstance.post('user/logout/blacklist/', {
          refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        window.location.href = '/login'; // Redirect to login page
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    logout();
  }, []);

  return (
    <div>
      Logging out...
    </div>
  );
}
