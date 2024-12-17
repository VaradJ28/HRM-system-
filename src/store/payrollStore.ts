import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PayrollRecord {
  id: string;
  employeeId: string;
  month: string;
  year: number;
  baseSalary: number;
  bonus: number;
  deductions: number;
  netPay: number;
  status: 'Pending' | 'Processed' | 'Paid';
}

interface PayrollState {
  records: PayrollRecord[];
  addRecord: (record: Omit<PayrollRecord, 'id'>) => void;
  updateRecord: (id: string, record: Partial<PayrollRecord>) => void;
  getEmployeeRecords: (employeeId: string) => PayrollRecord[];
  getMonthlyRecords: (month: string, year: number) => PayrollRecord[];
}

export const usePayrollStore = create<PayrollState>()(
  persist(
    (set, get) => ({
      records: [],
      addRecord: (record) => {
        const id = `PAY${Date.now()}`;
        set((state) => ({
          records: [...state.records, { ...record, id }]
        }));
      },
      updateRecord: (id, record) => {
        set((state) => ({
          records: state.records.map((rec) =>
            rec.id === id ? { ...rec, ...record } : rec
          )
        }));
      },
      getEmployeeRecords: (employeeId) => {
        return get().records.filter((record) => record.employeeId === employeeId);
      },
      getMonthlyRecords: (month, year) => {
        return get().records.filter(
          (record) => record.month === month && record.year === year
        );
      }
    }),
    {
      name: 'payroll-store'
    }
  )
);