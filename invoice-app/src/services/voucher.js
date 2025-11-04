import useAccountStore from "../stores/useAccountStore";

export const voucherApiUrl = `${import.meta.env.VITE_API_URL}/vouchers`;

const token = useAccountStore.getState().token;

export const fetchVoucher= (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export const storeVoucher = (data) => {
  return fetch(voucherApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const destroyProduct = (id) => {
  return fetch(`${voucherApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
