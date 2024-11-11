import pool from '../db';

export interface Task {
    id: number;
    date: string;
    title: string;
    description: string;
}

export const createTask