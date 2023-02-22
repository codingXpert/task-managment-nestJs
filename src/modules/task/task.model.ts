export interface Task {
    id: string;
    title: string;
    desc: string;
    status: TaskStatus
}

export enum TaskStatus {
    OPEN = 'open',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}