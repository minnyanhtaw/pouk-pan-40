import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAccountStore from "../../../stores/useAccountStore";
import { checkProfile } from "../../../services/profile";
import toast, { Toaster } from "react-hot-toast";
import ButtonSpinner from "../../../components/ButtonSpinner";
import Header from "./Header";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { logout, token } = useAccountStore();
  const [isLoading, setIsLoading] = useState(false);

  const autoLogoutIfTokenExpired = async (currentToken) => {
    const res = await checkProfile(currentToken);
    if (res.status === 401) {
      toast.error("Session expired, please login again");
      logout();
    }
  };

  useEffect(() => {
    const currentToken = useAccountStore.getState().token;

    if (!currentToken) {
      navigate("/");
    } else {
      autoLogoutIfTokenExpired(currentToken);
    }
    setIsLoading(false);
  }, [token]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <ButtonSpinner />
      </div>
    );
  }

  return (
    <section className="container mx-auto">
      <Header />
      <Outlet />
      <Toaster />
    </section>
  );
};

export default DashboardLayout;
