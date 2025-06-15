
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Define the user type
interface User {
  id: string;
  fullName: string;
  email: string;
}

// A more complete user type for storage, including password
interface StoredUser extends User {
  password?: string;
}

// Define the shape of the context
interface AuthContextType {
  user: User | null;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for a logged-in user in localStorage on initial load
    try {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('loggedInUser');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (data: any) => {
    const { email, password } = data;
    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      const { password: _, ...userToStore } = foundUser;
      localStorage.setItem('loggedInUser', JSON.stringify(userToStore));
      setUser(userToStore);
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid email or password.');
    }
  };

  const register = async (data: any) => {
    const { fullName, email, password } = data;
    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      toast.error('User with this email already exists.');
      return;
    }

    const newUser = { id: crypto.randomUUID(), fullName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    toast.success('Account created successfully! Please log in.');
    navigate('/login');
  };

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    toast.info('You have been logged out.');
    navigate('/login');
  };

  const value = { user, login, register, logout, isLoading };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
