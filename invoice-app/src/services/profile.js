import useAccountStore from "../stores/useAccountStore";

export const profileApiUrl = import.meta.env.VITE_API_URL + "/user-profile";

const token = useAccountStore.getState().token;

export const checkProfile = async (updateToken) => {
  return fetch(profileApiUrl + "/show", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${updateToken}`,
    },
  });
};

export const changeName = (data) => {
  return fetch(profileApiUrl + "/change-name", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changePassword = (data) => {
  return fetch(profileApiUrl + "/change-password", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeImage = (data) => {
  return fetch(profileApiUrl + "/change-profile-image", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
