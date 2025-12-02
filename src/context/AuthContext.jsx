import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const TOKEN_KEY = "rb_token";
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const mapError = async (response) => {
  let message = "Something went wrong";
  try {
    const data = await response.json();
    if (data?.message) message = data.message;
  } catch {
    // ignore
  }
  const error = new Error(message);
  error.status = response.status;
  throw error;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(TOKEN_KEY);
    if (!stored) {
      setLoading(false);
      return;
    }
    setToken(stored);
    fetchProfile(stored).catch(() => {});
  }, []);

  const fetchProfile = async (authToken) => {
    try {
      const response = await fetch(`${API_BASE}/auth/me`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (!response.ok) {
        await mapError(response);
      }
      const data = await response.json();
      setUser(data.user);
      setToken(authToken);
      window.localStorage.setItem(TOKEN_KEY, authToken);
    } catch (error) {
      window.localStorage.removeItem(TOKEN_KEY);
      setUser(null);
      setToken(null);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (payload) => {
    const response = await fetch(`${API_BASE}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      await mapError(response);
    }
    const data = await response.json();
    setUser(data.user);
    setToken(data.token);
    window.localStorage.setItem(TOKEN_KEY, data.token);
    return data.user;
  };

  const login = async (payload) => {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      await mapError(response);
    }

    const data = await response.json();
    setUser(data.user);
    setToken(data.token);
    window.localStorage.setItem(TOKEN_KEY, data.token);
    return data.user;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem(TOKEN_KEY);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      loading,
      login,
      signup,
      logout,
      refreshProfile: fetchProfile,
    }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
