import axiosClient from "./axiosClient"

const authApi = {
  signup: path => axiosClient.post('auth/signup', path),
  login: path => axiosClient.post('auth/login', path),
  verifyToken: () => axiosClient.post('auth/verify-token')
}

export default authApi;