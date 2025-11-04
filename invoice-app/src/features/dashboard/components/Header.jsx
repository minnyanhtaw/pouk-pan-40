import React from "react";
import useAccountStore from "../../../stores/useAccountStore";
import LogoutButton from "../../../components/LogoutButton";

const Header = () => {
  const { account } = useAccountStore();
  console.log(account);
  return (
    <header className=" mb-5 py-3">
      <div className=" flex justify-between items-center">
        <div className=" flex items-center">
          <p className=" text-5xl font-bold text-blue-600">LOGO.</p>
        </div>
        <div className=" flex gap-3 items-center">
          <img
            src={
              account?.profile_image
                ? account?.profile_image
                : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
            alt="account photo"
            className="border-2 border-white shadow-sm size-12 rounded-full object-cover object-top"
          />
          <div>
            <p className="font-bold">{account?.name}</p>
            <p className=" text-sm text-gray-500">{account?.email}</p>
          </div>
          <LogoutButton>Logout</LogoutButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
