const getTokenFromLocalStorge = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorge.token}`,
    Accept: "application/json",
  },
};
