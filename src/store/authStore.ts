import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  role: 'admin' | 'employee';
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (id: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Simulated user database
const users = {
  'ADMIN001': {
    id: 'ADMIN001',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin' as const
  },
  'EMP001': {
    id: 'EMP001',
    password: 'password123',
    name: 'Sarah Johnson',
    role: 'employee' as const
  }
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (id: string, password: string) => {
    const user = users[id as keyof typeof users];
    if (user && user.password === password) {
      set({
        isAuthenticated: true,
        user: {
          id: user.id,
          name: user.name,
          role: user.role
        }
      });
      return true;
    }
    return false;
  },
  logout: () => {
    set({
      isAuthenticated: false,
      user: null
    });
  }
}));

export { useAuthStore };