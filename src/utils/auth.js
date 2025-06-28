// src/utils/auth.js

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

import jwt_decode from 'jwt-decode';

export const AuthService = {
  // Save tokens
  saveTokens(access, refresh) {
    localStorage.setItem(ACCESS_TOKEN_KEY, access);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
  },

  // Get access token
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  // Get refresh token
  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  // Check if user is logged in (basic check)
  isAuthenticated() {
    const token = this.getAccessToken();
  if (!token) return false;

  const { exp } = jwt_decode(token);
  return Date.now() < exp * 1000; // check if still valid
  },

  // Remove tokens
  logout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  // Attach auth header to Axios
  authHeader() {
    const token = this.getAccessToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
};
