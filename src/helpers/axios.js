import axios from 'axios'

export const fetchLogin = (user) =>
  axios
    .post(`http://localhost:8000/user/signin`,{...user})

