import axios from 'axios';
export const getUserList = (url) => {
    return axios.get(url);
    // return fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     return data;
    //   })
    //   .catch((error) => console.log(error));
  };


