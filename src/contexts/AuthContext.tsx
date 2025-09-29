import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'farmer' | 'testing' | 'manufacturer' | 'packaging' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
  location?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user data for demonstration
const mockUsers: Record<string, User> = {
  'farmer@ayush.gov.in': {
    id: '1',
    name: 'Ramesh Kumar',
    email: 'farmer@ayush.gov.in',
    role: 'farmer',
    organization: 'Himalayan Herbs Cooperative',
    location: 'Uttarakhand, India'
  },
  'testing@ayush.gov.in': {
    id: '2',
    name: 'Dr. Priya Sharma',
    email: 'testing@ayush.gov.in',
    role: 'testing',
    organization: 'National Botanical Research Institute',
    location: 'Delhi, India'
  },
  'manufacturer@ayush.gov.in': {
    id: '3',
    name: 'Suresh Patel',
    email: 'manufacturer@ayush.gov.in',
    role: 'manufacturer',
    organization: 'Ayurvedic Formulations Ltd',
    location: 'Gujarat, India'
  },
  'packaging@ayush.gov.in': {
    id: '4',
    name: 'Meera Singh',
    email: 'packaging@ayush.gov.in',
    role: 'packaging',
    organization: 'Heritage Packaging Solutions',
    location: 'Karnataka, India'
  },
  'admin@ayush.gov.in': {
    id: '5',
    name: 'Dr. Rajesh Gupta',
    email: 'admin@ayush.gov.in',
    role: 'admin',
    organization: 'Ministry of AYUSH',
    location: 'New Delhi, India'
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth on mount
    const storedUser = localStorage.getItem('botanicalTracesUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = mockUsers[email];
    if (mockUser && mockUser.role === role && password === 'password123') {
      setUser(mockUser);
      localStorage.setItem('botanicalTracesUser', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('botanicalTracesUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};