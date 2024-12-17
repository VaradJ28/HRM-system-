import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface EmployeeRouteProps {
  children: React.ReactNode;
}

export default function EmployeeRoute({ children }: EmployeeRouteProps) {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'employee') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}