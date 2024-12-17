import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
  joiningDate: string;
  status: 'Active' | 'Inactive';
  password: string;
}

interface EmployeeState {
  employees: Employee[];
  addEmployee: (employee: Omit<Employee, 'id'>) => string;
  updateEmployee: (id: string, employee: Partial<Employee>) => void;
  deleteEmployee: (id: string) => void;
  getNextEmployeeId: () => string;
}

const useEmployeeStore = create<EmployeeState>()(
  persist(
    (set, get) => ({
      employees: [
        {
          id: 'EMP001',
          name: 'Sarah Johnson',
          email: 'sarah.j@company.com',
          position: 'UI Designer',
          department: 'Design',
          salary: 75000,
          joiningDate: '2024-01-15',
          status: 'Active',
          password: 'password123'
        }
      ],
      addEmployee: (employee) => {
        const id = get().getNextEmployeeId();
        set((state) => ({
          employees: [...state.employees, { ...employee, id }]
        }));
        return id;
      },
      updateEmployee: (id, employee) => {
        set((state) => ({
          employees: state.employees.map((emp) =>
            emp.id === id ? { ...emp, ...employee } : emp
          )
        }));
      },
      deleteEmployee: (id) => {
        set((state) => ({
          employees: state.employees.filter((emp) => emp.id !== id)
        }));
      },
      getNextEmployeeId: () => {
        const employees = get().employees;
        const lastId = employees.length > 0
          ? parseInt(employees[employees.length - 1].id.replace('EMP', ''))
          : 0;
        return `EMP${String(lastId + 1).padStart(3, '0')}`;
      }
    }),
    {
      name: 'employee-store'
    }
  )
);

export { useEmployeeStore };