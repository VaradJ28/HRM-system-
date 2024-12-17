import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Department {
  id: string;
  name: string;
  head: string;
  budget: number;
  description: string;
}

interface DepartmentState {
  departments: Department[];
  addDepartment: (department: Omit<Department, 'id'>) => void;
  updateDepartment: (id: string, department: Partial<Department>) => void;
  deleteDepartment: (id: string) => void;
}

const useDepartmentStore = create<DepartmentState>()(
  persist(
    (set) => ({
      departments: [
        {
          id: 'DEP001',
          name: 'Engineering',
          head: 'Michael Chen',
          budget: 450000,
          description: 'Software development and technical operations'
        }
      ],
      addDepartment: (department) => {
        const id = `DEP${Date.now()}`;
        set((state) => ({
          departments: [...state.departments, { ...department, id }]
        }));
      },
      updateDepartment: (id, department) => {
        set((state) => ({
          departments: state.departments.map((dept) =>
            dept.id === id ? { ...dept, ...department } : dept
          )
        }));
      },
      deleteDepartment: (id) => {
        set((state) => ({
          departments: state.departments.filter((dept) => dept.id !== id)
        }));
      }
    }),
    {
      name: 'department-store'
    }
  )
);

export { useDepartmentStore };