const getUserFromLocalStorge = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

  export const config = {
    headers: {
        'Authorization': `Bearer ${getUserFromLocalStorge.token}`,
        'Accept'       : 'application/json'
       }
  }