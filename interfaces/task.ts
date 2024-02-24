export interface Task {
  _id: string;
  projectId: string;
  credentials: TaskCredentials;
  state: TaskState;
  createdAt: number,
  createdBy: {
    userId: string
  },
  dateRange?: DateRange;
}

export interface TaskCredentials {
  name: string;
  assignedTo?: {
    userId: string
  };
  estimation: Estimation;
  specialization: Specialization;
}
