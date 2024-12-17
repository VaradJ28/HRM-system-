import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Late';
}

interface AttendanceState {
  records: AttendanceRecord[];
  addRecord: (record: Omit<AttendanceRecord, 'id'>) => void;
  updateRecord: (id: string, record: Partial<AttendanceRecord>) => void;
  getEmployeeRecords: (employeeId: string) => AttendanceRecord[];
  getDailyRecords: (date: string) => AttendanceRecord[];
}

export const useAttendanceStore = create<AttendanceState>()(
  persist(
    (set, get) => ({
      records: [],
      addRecord: (record) => {
        const id = `ATT${Date.now()}`;
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
      getDailyRecords: (date) => {
        return get().records.filter((record) => record.date === date);
      }
    }),
    {
      name: 'attendance-store'
    }
  )
);