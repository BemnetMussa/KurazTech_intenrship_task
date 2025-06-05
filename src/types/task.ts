export interface Task {
  id: number
  title: string
  completed: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateTaskRequest {
  title: string
}

export interface UpdateTaskRequest {
  completed?: boolean
  title?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  total?: number
}

export interface TasksQueryParams {
  filter?: "completed" | "pending"
}

export interface HealthCheckResponse {
  success: boolean
  message: string
  timestamp: string
  uptime?: number
  endpoints: {
    [key: string]: string
  }
}
