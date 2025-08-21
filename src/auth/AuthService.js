// src/service/AuthService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

class AuthService {
  async login(username, password) {
    const res = await axios.post(`${API_URL}/login`, { username, password });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
    localStorage.setItem("username", res.data.username);
    localStorage.setItem("email", res.data.email || "");
    localStorage.setItem("fullName", res.data.fullName || "");
    return res.data;
  }

  async register(user) {
    return axios.post(`${API_URL}/register/user`, user);
  }

  getAuthHeader() {
    const token = localStorage.getItem("token");
    if (token) return { headers: { Authorization: "Bearer " + token } };
    return {};
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("fullName");
  }
}

export default new AuthService();
