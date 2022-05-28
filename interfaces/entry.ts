export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}

export type EntryStatus = 'next-up' | 'in-progress' | 'completed';